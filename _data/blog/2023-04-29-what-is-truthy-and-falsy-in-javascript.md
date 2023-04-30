---
template: BlogPost
path: /blog/what-is-truthy-and-false-in-javascript
date: 2023-04-29T12:37:42.146Z
title: What is Truthy and Falsy in JavaScript
tags:
  - javascript
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/truthy_and_falsy_in_js.png
---

Read the previous post in this series here: [Ternary Operator in JavaScript](https://www.thecodedose.com/blog/ternary-operator-in-javascript)

# Introduction

Have you ever written a logical condition in JavaScript and saw unexpected results?
For example, take a look at this:

```js
const flag = 0
if (flag == false) {
  console.log("Flag is false")
}
```

The above code prints "Flag is false" even though its not!
This is where the concepts of "truthy" and "falsy" values come in.
In JavaScript, every value is either "truthy" (behaves like truth) or "falsy" (behaves like false).
This means that they can be evaluated as either `true` or `false` when needed.
In the above example, the value of `flag` is evaluated to `false` (since `0` is falsy), hence why it prints "Flag is false".

# Truthy & Falsy Values

In JavaScript, we have 9 falsy values:

```js
"" // empty string
0
-0 // negative 0
0n // BigInt 0
NaN
false
null
undefined
document.all
```

All values except these 9 values are truthy.

# Working with Truthy & Falsy Values

Truthy values are evaluated to `true` and falsy values are evaluated to `false` when used in logical expressions.

```js
if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
```

Truthy and falsy values can be incredibly helpful when working with conditional statements in JavaScript.
For example:

```js
let name = "";
if (name) {
  console.log("Hello, " + name);
} else {
  console.log("Please enter your name.");
}
```

In this example, since `name` is an empty string, it is considered falsy and the condition will evaluate to `false`.
Therefore, the program will log "Please enter your name."

Another example:

```js
let num = 10;
if (num) {
  console.log("The value of num is " + num);
} else {
  console.log("num is undefined or 0");
}
```

In this example, since `num` is a non-zero number, it is considered truthy and the condition will evaluate to `true`.
Therefore, the program will log "The value of num is 10."

It's important to note that truthy and falsy values can be unpredictable at times, so it's always a good idea to explicitly check for the value you're expecting rather than relying on truthy/falsy evaluation.

Read the next post in this series here: [Understanding Short Circuit Evaluation in JavaScript](https://www.thecodedose.com/blog/understanding-short-circuit-evaluation-in-javascript)
