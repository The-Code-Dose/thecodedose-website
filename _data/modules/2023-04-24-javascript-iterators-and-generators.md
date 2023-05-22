---
template: ModuleTemplate
slug: javascript-iterators-and-generators
title: Understanding Iterators and Generators in JavaScript
curriculum: javascript
path: /curriculum/javascript/javascript-iterators-and-generators
thumbnail: /assets/iterators_and_generators_js.png
---

If you've never heard about iterators and generators in JavaScript, or if you've heard about them but don't know what they exactly do, then you've come to the right place!
In this blog post, we'll explore iterators and generators and understand how they are useful.

(Note: To understand iterators and generators properly, you must be familiar with prototypes, promises, closures and symbols in JavaScript.)

# What is an Iterator?

An iterator is an object that provides a way to access elements in a collection, one at a time, without needing to know the underlying data structure.

You might have already used built-in iterators in your daily JavaScript programs:

```js
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

for (const day of days) {
  console.log(day)
}
```

# What are Iterables?

Any object that implements a iterator method that can be accessed via the constant `Symbol.iterator` is an iterable.

The following types: `String`, `Array`, `TypedArray`, `Map`, `Set`, and `Segments` are built-in iterables, because each of their prototype objects implements an iterator method.

Let's try and access the iterators using `Symbol.iterator`:

```js
const arr = [1, 2, 3]
console.log(arr[Symbol.iterator]()) // returns the Iterator object: Array Iterator {}

const m = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);
console.log(m[Symbol.iterator]()) // returns the Iterator object: MapIterator {'a' => 1, 'b' => 2, 'c' => 3}
```

Similarly, you can access the iterators of other built-in iterables.

# Using Iterators

Iterators work by providing a `next()` method, which returns an object with two properties:
1. The `value` property contains the current element of the collection
2. The `done` property is a boolean that indicates whether there are more elements in the collection


Here's an example of using an iterator to loop through an array:

```js
const arr = [1, 2, 3]
const iterator = arr[Symbol.iterator]()

console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```

In this example, we've created an iterator for the array using the built-in `Symbol.iterator` method.
We then looped through the array by calling the `next()` method on the iterator.
You can access the elements of the array using the `value` property of the returned object and can stop looping when `done` is `false`.

# Creating Iterables and Iterators

What happens when you try to loop through an object using the `for...of` loop?

```js
const links = {
  instagram: "https://www.instagram.com/thecodedose/",
  twitter: "https://twitter.com/thecodedose",
  youtube: "https://www.youtube.com/channel/UC74LLw9u0wG4arsn8wYpC7w",
}

for (const link of links) { // VM103:7 Uncaught TypeError: links is not iterable
  console.log(link)
}
```

The above code throws an error because objects are not iterables as they do not follow the iterable protocol, i.e., they do not have the `Symbol.iterator` key defined by default unlike the other built-in iterables, where the `Symbol.iterator`'s value should be a zero-argument function that returns an object, conforming to the iterator protocol, i.e., a standard to write iterators.

But...

## What is the Iterator Protocol?

An object is said to follow the iterator protocol when it implements the following methods:

1. `next()` - Calling this method returns the next element in the collection and if there are more elements left.
2. (Optional) `return(value)` - Calling this method tells the iterator that the caller does not intend to make any more `next()` calls and can perform any cleanup actions.
3. (Optional) `throw(exception)` - Calling this method tells the iterator that the caller detects an error condition, and exception is typically an `Error` instance.

All these methods must return an object implementing the `IteratorResult` interface, i.e., an object with the `done` and `value` properties.

Now lets make the `links` object from the previous example an iterable according to the iterable and iterator protocols:

```js
const links = {
  instagram: "https://www.instagram.com/thecodedose/",
  twitter: "https://twitter.com/thecodedose",
  youtube: "https://www.youtube.com/channel/UC74LLw9u0wG4arsn8wYpC7w",
  [Symbol.iterator]: function() {
    const keys = Object.keys(links);
    let index = 0
    return {
      next: function() {
        if (index < keys.length) {
          const key = keys[index++]
          return { value: { key, value: links[key] }, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (const link of links) {
  const { key, value } = link
  console.log(`${key}: ${value}`)
}
// instagram: https://www.instagram.com/thecodedose/
// twitter: https://twitter.com/thecodedose
// youtube: https://www.youtube.com/channel/UC74LLw9u0wG4arsn8wYpC7w
```

Now, JavaScript does not throw an error anymore because we've made the `links` object an iterable.

Here's another example:

```js
const myObj = {
  data: [1, 2, 3],

  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const item of myObj) {
  console.log(item);
}
// 1
// 2
// 3
```

In the above code, we've defined the behaviour of the iterator such that when we loop through `myObj`, we're actually iterating through `myObj.data`.
The above code can also be rewritten like this:

```js
const myObj = {
  data: [1, 2, 3],

  [Symbol.iterator]: function() {
    return this.data[Symbol.iterator]()
  }
};

for (const item of myObj) {
  console.log(item);
}
// 1
// 2
// 3
```

Now that you know what iterators are, lets have a look at generators.

# Generators

In simple words, generator functions are pausable functions.
They can be paused and resumed and return a `Generator` object, allowing you to write iterators with custom behavior.

Generators use the `function*` syntax and `yield` keyword to define a sequence of values that can be returned one at a time.

```js
function* generatorFunc() {
  yield 1
}
```

When you call a generator function, it doesn't actually execute the function, but instead returns an generator (or iterator) object that you can use to control the execution of the generator function.
`Generator` is a subclass of the hidden `Iterator` class.

```js
function* generatorFunc() {
  yield 1
  yield 2
  yield 3
}

const generator = generatorFunc()

for (const item of generator) {
  console.log(item);
}
// 1
// 2
// 3
```

The generator object has a `next()` method.
When you call `next()`, only then the generator function starts execution and pauses when it hits a `yield` keyword.
When it reaches a `yield` statement,it returns an object with a `value` property that contains the value of the yield expression, and a `done` property that is `false`.

When there are no more yield statements left, the done property is `true` and the value property is `undefined`.

```js
function* generatorFunc() {
  console.log('one')
  yield 1
  console.log('two')
  yield 2
  console.log('three')
  yield 3
}

const generator = generatorFunc()

console.log(generator.next())
// one
// {value: 1, done: false}

console.log(generator.next())
// two
// {value: 2, done: false}

console.log(generator.next())
// three
// {value: undefined, done: false}
```

Here's another example of a generator function that counts til infinity:

```javascript
function* counter() {
  let i = 0;
  while (true) {
    yield i
    i++
  }
}

const generator = counter();
console.log(generator.next().value) // 0
console.log(generator.next().value) // 1
console.log(generator.next().value) // 2
console.log(generator.next().value) // 3
console.log(generator.next().value) // 4
```

# Iterators vs Generators

Generators and iterators serve different purposes in JavaScript and can be used in different scenarios.

Iterators are used to traverse and access the elements of a collection (like an array or a map) in a sequential manner, one by one. They can be used to perform operations like filtering, mapping, or reducing the elements of the collection.

Generators, on the other hand, are used to produce a sequence of values on demand, allowing you to pause and resume the sequence at any point. They are useful when you need to generate a potentially infinite sequence of values, or when you need to generate values lazily, as they are requested.

Iterators and generators are both powerful tools for working with collections of data in JavaScript.
By understanding how these tools work and how to use them in your code, you can write more efficient and flexible programs. Whether you're working with arrays, sets, maps, or other data structures, iterators and generators can help you traverse and manipulate your data in powerful new ways.
