---
template: ModuleTemplate
slug: arrays-in-javascript
title: Arrays in JavaScript
curriculum: javascript
path: /curriculum/javascript/arrays-in-javascript
thumbnail: /assets/arrays_in_javascript.png
---

# What are Arrays?

In JavaScript, an array is a data structure used to store multiple values of different types.
So far you've only worked with individual values.

```js
let a = 5;
let b = 10;
```

Arrays allow you to hold and organize related values into a single variable.
To create an array in JavaScript, you use the square brackets, `[]`:

```javascript
const myArray = [];
```

You can initialize an array with values by providing the elements inside the square brackets, separated by commas:

```javascript
const myArray = [1, 2, 3, 'four', true];
```

This is also known as an array literal.
In this example, we have an array called `myArray` that contains various elements such as numbers, strings, and a boolean value.

Another way to create an array is by using the `Array()` constructor. This constructor allows you to specify the initial length of the array. Here's an example:

```javascript
const myArray = new Array(3);
console.log(myArray) // [empty × 3]
```

You can use the `fill` method to populate the array with a specified value:

```javascript
const myArray = new Array(3).fill("Hello");
console.log(myArray) // ['Hello', 'Hello', 'Hello']
```

# Accessing Array Elements

Instead of using the entire array, what if you want to use just an individual value from the array?
You can do that by using its index position.
You can think of the index as the address of the element within the array.
In JavaScript, arrays are zero-indexed, which means the first element is located at index 0, the second element at index 1, and so on. Here's an example:

```javascript
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
```

In this example, we have an array called `fruits` containing three elements. By using square brackets `[]` and specifying the index inside them, we can access each element individually. So, `fruits[0]` retrieves the first element `'apple'`, `fruits[1]` retrieves the second element `'banana'`, and `fruits[2]` retrieves the third element `'orange'`.

You can also use variables to dynamically access array elements.

```js
const fruits = ['apple', 'banana', 'orange'];
const index = 0;
console.log(fruits[index + 1]); // banana
```

By changing the value of `index`, you can retrieve different elements from the array.

# Modifying Array Elements

Arrays are mutable data structures in JavaScript, which means you can modify their elements after they are created.
You can do that by using the square bracket notation to directly assign a new value to the desired index. Here's an example:

```javascript
const fruits = ['apple', 'banana', 'orange'];

fruits[1] = 'grape';
console.log(fruits); // ['apple', 'grape', 'orange']
```

# The Length of an Array

You can use the `length` property to get the size of an array, i.e., the number of elements it holds.

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 3
```

You can even assign a value to the `length` property, thus, resizing the array.

```javascript
fruits.length = 2;
console.log(fruits); // ['apple', 'banana']

fruits.length = 4;
console.log(fruits) // ['apple', 'banana', empty × 2]
```

# Iterating Over Arrays

Iterating over arrays allows you to access and process each element within the array. JavaScript provides multiple approaches to iterate over arrays, offering flexibility and convenience.

## The `for` Loop

```javascript
const fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// apple
// banana
// orange
```

In this example, the `for` loop iterates over the array by incrementing the index `i` from `0` to `fruits.length - 1`. You can perform any desired actions inside the loop for each element.

You can also iterate the array in reverse order using the `for` loop:

```javascript
const fruits = ['apple', 'banana', 'orange'];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
// orange
// banana
// apple
```

## The `for...of` Loop

The `for...of` loop simplifies array iteration by directly providing each element of the array, `fruit`, without the need for an index variable. It iterates over the array and executes the loop body for each element.

```javascript
const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(fruit);
}
// apple
// banana
// orange
```

# Array Methods

JavaScript provides several methods to work with arrays.
Here are a few commonly used methods:

- `push()`: Adds one or more elements to the end of an array.
- `pop()`: Removes the last element from an array.
- `unshift()`: Adds one or more elements to the beginning of an array.
- `shift()`: Removes the first element from an array.

```javascript
const fruits = ['apple', 'banana'];

fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

fruits.pop();
console.log(fruits); // ['apple', 'banana']

fruits.unshift('grape');
console.log(fruits); // ['grape', 'apple', 'banana']

fruits.shift();
console.log(fruits); // ['apple', 'banana']
```

JavaScript provides several built-in methods that allow you to manipulate and transform arrays. These methods offer convenient ways to sort, reverse, combine, and transform array elements.

The `sort()` method is used to sort the elements of an array in place, meaning it modifies the original array. By default, the elements are sorted in ascending order based on their string representations.

```javascript
const numbers = [4, 2, 8, 5, 1];

numbers.sort();

console.log(numbers); // [1, 2, 4, 5, 8]
```

The `reverse()` method reverses the order of the elements in an array, altering the original array.

```javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.reverse();

console.log(fruits); // ['cherry', 'banana', 'apple']
```

The `concat()` method is used to combine two or more arrays into a new array without modifying the original arrays.

```javascript
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];

const combined = fruits.concat(vegetables);

console.log(combined); // ['apple', 'banana', 'carrot', 'broccoli']
```

# Multidimensional Arrays

A multidimensional array is an array that contains other arrays as its elements. It allows you to represent and work with data in a structured, grid-like format.

You can also think of a multidimensional array as an array of arrays.
To create a multidimensional array, you can simply nest arrays within an outer array. Each nested array represents a row or a specific dimension within the multidimensional structure.

```javascript
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

In this example, `grid` is a 2-dimensional array with three rows and three columns.

To access elements within a multidimensional array, you can use multiple sets of brackets, each representing the index of the desired element in its respective dimension.

```javascript
console.log(grid[0][1]); // Output: 2
console.log(grid[2][2]); // Output: 9
```

In the first `console.log` statement, `grid[0][1]` accesses the element at the first row (`grid[0]`) and second column (`grid[0][1]`).

You can iterate through nested arrays using nested loops:

```js
for (const row of grid) {
  for (const item of row) {
    console.log(item)
  }
}
```

Multidimensional arrays are useful for representing and manipulating structured data, such as grids, matrices, and tables. They are commonly used in various applications, including:

- Game development: Storing game maps, character positions, and other game-related data.
- Data analysis: Managing datasets with rows and columns, performing operations on matrices.
- Image processing: Representing and processing pixels in an image.
- Scientific computing: Handling multidimensional data for simulations, modeling, and analysis.
