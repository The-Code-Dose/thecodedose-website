---
template: ModuleTemplate
slug: understanding-short-circuit-evaluation-in-javascript
title: Understanding Short Circuit Evaluation in JavaScript
curriculum: javascript
draft: false
thumbnail: /assets/short-circuit-evaluation-js.png
---

If you work with JavaScript, then you've probably come across logical expressions.
A logical expression is a statement that evaluates to either `true` (or a truthy value) or `false` (or a falsy value).
It typically involves the use of logical operators (such as `&&`, `||`, and `!`) to combine one or more conditions or values.

For example: `x > 5`, `y === 10 || z < 3` are some logical expressions.

In JavaScript, logical expressions are often used in conditional statements (such as `if` and `while`) to control the flow of the program based on the current state of the variables or conditions being evaluated.

But do you know how such expressions are evaluated by JavaScript?

Short circuit evaluation is a common feature of many programming languages, including JavaScript.
In this blog post, we'll explore how short circuit evaluation works in JavaScript and how you can use it to write more efficient and elegant logical expressions.

# What is Short Circuit Evaluation?

Short circuit evaluation is a mechanism that allows logical expressions to be evaluated in a way that avoids _unnecessary computations_.

When a logical expression is evaluated JavaScript checks each operand from left to right until it can determine the overall value of the expression.

For example, consider the following:

```js
const a = true
const b = false
console.log(a && b)
```

JavaScript will start evaluating the above logical expression from left to right:
1. It will first evaluate the value of `a`, that is `true`
2. Then it will evaluate the value of `b`, that is `false`
3. Then it will evaluate `true && false`, that is `false`

If the value can be determined without evaluating all the operands, the remaining operands are not evaluated.

For example, consider the following:

```js
const a = true
const b = false
console.log(a || b)
```

JavaScript will start evaluating the above logical expression from left to right:
1. It will first evaluate the value of `a`, that is `true`
2. This time, due to the behaviour of the `||` operator, JavaScript doesn't need to evaluate the value of `b` since `true || true` and `true || false` both expressions evaluate to `true`.
3. JavaScript will return `true` without evaluating `b`.

This can lead to significant performance improvements in certain situations.
Let's try and understand this with more examples.

# Short Circuiting with `&&`

The logical operators `&&` and `||` exhibit short circuiting behavior.

1. When the `&&` operator is used in a logical expression, if the left operand is falsy (e.g., `false`, `null`, `undefined`, `0`, or an empty string), then the entire expression evaluates to that falsy value, and the right operand is not evaluated.
2. If the left operand is truthy (i.e., any value that is not falsy), then the expression evaluates to the value of the right operand, and the right operand is evaluated.

Here's an example that demonstrates short circuiting with `&&`:

```js
let a = 5
let b
console.log(a && b) // undefined
```

Note that the expression evaluates to either of the operands, in this case `b` i.e. `undefined` (which is falsy) instead of `false`.

```js
let foo;
let bar = true;


// If `foo` is defined and `bar` is also defined, log `foo`
foo && bar && console.log(foo);
```

In this example, the `&&` operator is used to test whether `foo` is defined and `bar` is also defined. If either of those conditions is `false`, the expression will short circuit and the `console.log() `statement will not be executed.

This behavior is useful in checking whether an object has a property.

```js
const person1 = {
  name: {
    first: 'John',
    middle: 'X',
    last: 'Doe',
  }
}

const person2 = {
  age: 32
}

function printFirstName(person) {
  person && person.name && person.firstName && console.log(person.firstName)
}

printFirstName(person1) // John
printFirstName(person2)
```

# Short Circuiting with `||`

The `||` operator works similarly to `&&`:

1. It evaluates to the value of the left operand if it is truthy
2. If the left operand is falsy, it evaluates to the value of the right operand.

```js
let a = 5
let b
let c = 6

console.log(a || b) // 5
console.log(b || a) // 5
console.log(c || a) // 6
```

You can use this behavior to assign default values to variables.
Here's an example:

```javascript
const name = '';
const displayName = name || 'Anonymous';

console.log(displayName); // Anonymous
```

In this example, the `||` operator is used to provide a default value for the `displayName` variable if name is falsy. If name is truthy (e.g., if it contains a non-empty string), then `displayName` will be set to the value of `name`. Otherwise, it will be set to the string 'Anonymous'.

# Practice

What will be the output of the following?

```js
let a
let b = "Hello"
let c = "World"

function concatAndPrint(x, y) {
  console.log(x, y)
}

a && b && concatAndPrint(b, c)
b && concatAndPrint(b, c)
a || b || concatAndPrint(b, c)
```

## Answer

1. `a && b && concatAndPrint(b, c)` will print `undefined`
2. `b && concatAndPrint(b, c)` will print `Hello World`
3. `a || b || concatAndPrint(b, c)` will print `Hello`
