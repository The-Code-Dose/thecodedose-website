---
template: BlogPost
path: /blog/operators-in-javascript
date: 2023-04-27T10:37:42.146Z
title: Working with Operators in JavaScript
tags:
  - javascript
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/operators_in_js.png
---

Welcome to another blog post about JavaScript!
If you haven't yet, read the previous post in this series here: [Primitive Data Types in JavaScript](https://www.thecodedose.com/blog/data-types-in-javascript)

In this post, we'll be discussing operators in JavaScript and how they work.

Operators are used to manipulate data by performing operations on values and variables.
They can be used to assign values, compare values, perform mathematical operations, and much more.

Here are the operators that you can use in JavaScript:

# Arithmetic Operators

You can use arithmetic operators are used to perform mathematical operations on values.
The basic arithmetic operators are `+`, `-`, `*`, and `/`.

```js
let sum = 5 + 3;
let difference = 10 - 2;
let product = 4 * 6;
let quotient = 12 / 3;
```

You can also use `-` and `+` operators as unary operators like follows:

```js
let x = -5;
let y = +5
console.log(-x); // 5
console.log(-y); // -5
```

The `+` operator can also be used to concatenate two strings:

```js
const name = "John"
const greeting = "Hello " + name // Hello John
```

JavaScript also has the modulo operator, `%`, that returns the integer remainder after division.

```js
console.log(10 % 5); // 0
console.log(7 % 3); // 1
console.log(18 % 5); // 3
```

You can use the `**` operator for exponentiation.

```js
console.log(2**2) // 4
console.log(3**4) // 81
console.log(5**10) // 9765625
```

There are some shorthand operators that you can use to increment or decrement values:

```js
let x = 1;

// same as x = x + 1
x++ // 2

// same as x = x - 1
x-- // 1
```

Note that `**` (exponentiation) and `//` (comment syntax) work differently than `++` and `--`.

# Assignment Operators

You have already used the assignment operator (`=`) in previous posts to assign values to variables.

```js
let num = 10;
```

JavaScript lets you use shorthand assignment operators to combine assignment with some arithmetic operation:

```js
// same as num = num + 1
num += 1 // 11

// same as num = num * 2
num *= 2 // 22

// same as num = num / 2
num /= 2 // 11

// same as num = num & 11
num %= 11 // 1

// same as num = num ** 2
num **= 2 // 1
```

# Comparison Operators

Comparison operators let you compare two values and return a boolean value of `true` or `false` as the result.

```javascript
let x = 5;
let y = 10;
// less than
console.log(x < y); // true
// greater than
console.log(x < y); // true
// equal to
console.log(x == y); // false
// not equal to
console.log(x != y); // true

// less than or equal to
console.log(x <= x) // true
// greater than or equal to
console.log(y >= x) // true
```

There are two additional comparison operators, the strict equality operators: `===` and `!==`.
However, we will cover them in a future post.

# Logical Operators

Logical operators let you to combine two or more conditions and return a boolean value.
The three logical operators are:
1. `&&` or logical AND
2. `||` or logical OR
3. `!` or logical NOT

```js
let a = 5;
let b = 10;
let c = 15;
console.log(a < b && b < c); // true
console.log(a > b || b > c); // false
console.log(!(a == b)); // true
```

# Bitwise Operators

Bitwise operators are used to perform bitwise operations on binary values.

JavaScript has the following bitwise operators available:
1. `&` or bitwise AND
2. `|` or bitwise OR
3. `^` or bitwise XOR
4. `~` or bitwise NOT
5. `<<` or left shift
6. `>>` or right shift
7. `>>>` or zero-fill right shift

```js
let x = 5;
let y = 10;
console.log(x & y); // 0
console.log(x | y); // 15
console.log(x ^ y); // 15
```

# Nullish Coalescing Operator

The nullish coalescing operator `??` is a fairly recent addition to JavaScript that came out in 2020.

Its main purpose is to make it easier and simpler to check for `null` or `undefined` values in your code, and give you a way to provide a default value in case those values do show up.

Basically, the operator looks at the value on its left side, and if it's `null` or `undefined`, it'll return the value on the right side instead. But if the value on the left side exists and isn't `null` or `undefined`, then it'll just return that value as-is.

```js
const foo = null ?? 'default value';
console.log(foo); // "default value"

const bar = 'hello' ?? 'default value';
console.log(bar); // logs "hello"

console.log(undefined ?? "It's undefined!") // It's undefined!
```
