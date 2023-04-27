---
template: BlogPost
path: /blog/data-types-in-javascript
date: 2023-04-27T09:37:42.146Z
title: Primitive Data Types in JavaScript
tags:
  - javascript
  - data types
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/data_types_js.png
---

Read the previous post in this series here: [Blocks, Scope & Hoisting in JavaScript](https://www.thecodedose.com/blog/blocks-scope-and-hoisting-in-javascript)

To work with data in JavaScript, it's important to understand data types. Data types are a fundamental concept in any programming language and have a direct impact on how your code behaves.

So far you've learnt how to assign values to variables.
We can classify these values into 7 primitive data types:
1. `String`
2. `Number`
3. `BigInt`
4. `Boolean`
5. `null`
6. `undefined`
7. `Symbol`

Each data type has unique properties and methods available that enable you to perform various operations and manipulations on data.

# Strings

Strings are used to represent text in JavaScript and can be enclosed in single quotes, double quotes, or backticks.

```js
const name = "John";
const greeting = 'Hello World';
const fruit = `mango`;
```

# Numbers

Numbers are used to represent numerical values in JavaScript, and they can be integers, decimals, or scientific notation.

```js
let age = 24
let weight = 63.63
```

# BigInts

BigInts are a new data type in JavaScript that allow you to represent integers with arbitrary precision.
They were introduced in ES2020 to address the limitation of the `Number` data type, which can only represent integers up to 2^53 - 1 accurately.

```js
let bigNum = 12345678901234567890
let bigInt = BigInt(12345678901234567890);
console.log(bigNum); // 12345678901234567000
console.log(bigInt); // 12345678901234567168n
```

# Booleans

Booleans represent logical values of `true` or `false` and are commonly used in conditional statements and loops.

```js
let isWeekend = false
let isWeekday = true
```

# undefined

All variables by default have the value `undefined` until they're defined or assigned a value.

```js
console.log(y) // undefined
let x
var y
console.log(x) // undefined
x = 3
console.log(x) // 3
```

# null

`null` is a special value in JavaScript that represents the intentional absence of a value unlike `undefined`.
It can only be assigned explicitly by you and is not assigned by JavaScript.

```js
let x
console.log(x) // undefined
x = null
console.log(x) // null
```

# Symbols

Symbols are a new data type introduced in ES6 that are used to create unique identifiers that cannot be modified or replicated.

```js
const mySymbol = Symbol('unique');
const unique = 'unique'
console.log(mySymbol == unique) // false
```

You'll learn more about all these data types in detail and the different operations that you can perform on them in future posts.
So stay tuned!

Read the next post in this series here: [Working with Operators in JavaScript](https://www.thecodedose.com/blog/operators-in-javascript)
