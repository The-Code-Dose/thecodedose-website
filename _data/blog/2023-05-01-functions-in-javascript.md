---
template: BlogPost
path: /blog/functions-in-javascript
date: 2023-05-01T11:37:42.146Z
title: Functions in JavaScript
tags:
  - javascript
  - beginners
featured: false
draft: true
travel: false
author: Urvashi
thumbnail: /assets/loop_js.jpeg
---

Read the previous post in this series here: [Working with Loops in JavaScript](https://www.thecodedose.com/blog/loops-in-javascript)

Functions are an essential part of JavaScript.
They allow you to write reusable pieces of code that can be used over and over again, making your code more efficient and easier to maintain. In this post, we'll explore what functions are and how to use them in JavaScript.

# What are Functions?

A function is a block of code that performs a specific task. You can think of it as a mini-program within your larger program. Functions take input, perform a computation, and return output.

In JavaScript, functions are defined using the function keyword, followed by the name of the function, a set of parentheses, and a pair of curly braces. Here's an example:

```js
function sayHello() {
  console.log('Hello, world!');
}
```

In this example, we've defined a function called sayHello that logs the message "Hello, world!" to the console.

To call the function and execute its code, we simply use the name of the function followed by a set of parentheses:

javascript
Copy code
sayHello();
This will output the message "Hello, world!" to the console.

# Parameters and Arguments

Functions can also accept input in the form of parameters. A parameter is a placeholder for a value that will be passed to the function when it's called. Here's an example:

javascript
Copy code
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
In this example, we've defined a function called sayHello that takes one parameter called name. When the function is called, the value passed to the name parameter will be inserted into the message using string interpolation.

To call the function and pass a value to the name parameter, we simply include the value in the parentheses when we call the function:

javascript
Copy code
sayHello('Alice');
This will output the message "Hello, Alice!" to the console.

The value that's passed to a function's parameter is called an argument.

# Return Values

Functions can also return values using the return keyword. A return value is the output that the function produces after performing its computation. Here's an example:

javascript
Copy code
function add(a, b) {
  return a + b;
}
In this example, we've defined a function called add that takes two parameters, a and b, and returns their sum using the + operator.

To call the function and retrieve its return value, we simply use the function name followed by a set of parentheses:

javascript
Copy code
let result = add(2, 3);
console.log(result); // Output: 5
In this example, we've called the add function with the arguments 2 and 3, and stored the return value in a variable called result. We then output the value of result to the console, which is 5.
