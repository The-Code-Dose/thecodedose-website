---
template: BlogPost
path: /blog/loops-in-javascript
date: 2023-05-01T11:37:42.146Z
title: Working with Loops in JavaScript
tags:
  - javascript
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/loop_js.jpeg
---

Read the previous post in this series here: [Switch Statements in JavaScript](https://www.thecodedose.com/blog/switch-statements-in-javascript)

In this blog post, we'll explore loops in JavaScript - a fundamental concept that every developer should know.

# What are loops?

How would you print the numbers from 1 to 5?
You'd probably do something like this:

```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
```

What if I ask you print the numbers from 1 to 100? or 1 to 10000000?
Printing all these numbers individually is not possible!
This is where loops come in.
Loops help you execute a block of code repeatedly, which is especially handy when you have to perform the same action multiple times, or when you need to go through an array or object.

JavaScript has several types of loops to choose from, including the popular for loop, the flexible while loop, the tenacious do-while loop, and more.

# For Loops

The for loop allows you to execute a block of code a specific number of times. The syntax of a for loop is as follows:

```js
for (initialization; condition; post expression) {
  // code to be executed
}
```

In this loop, the initialization statement is executed once at the beginning of the loop. The condition statement is evaluated at the beginning of each iteration, and if it's `true`, the loop continues.
The post expression statement is executed at the end of each iteration. Here's an example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

This loop will print the numbers 0 to 4 to the console.
Lets walkthrough this loop step by step:

1. The loop is initialized with a variable `i` set to 0.
2. The loop will run as long as `i` is less than 5.
3. Inside the loop, the code will execute the `console.log(i)` statement, which will print the current value of `i` to the console.
4. After the code inside the loop is executed, the loop will increment the value of `i` by 1.
5. The loop will then check if `i` is less than 5, and if it is, the loop will continue to run, executing the code inside the loop again.
6. This will continue until `i` is no longer less than 5, i.e., `i` >= 5 at which point the loop will exit without executing the block.

# While Loops

The while loop is another type of loop in JavaScript.
It executes a block of code as long as a specified condition is `true`. Here's the syntax:

```js
while (condition) {
  // code to be executed
}
```

The condition statement is evaluated at the beginning of each iteration. If it's `true`, the loop continues.
If it's `false`, the loop stops.
`while` loops don't have the intialization and post expression statements.
Usually, you write the initialization before the loop and the post expression inside the block.
Here's an example:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

This loop will also print the numbers 0 to 4 to the console.

# for vs while

A `for` loop is typically used when you know the number of iterations you need to make.
For example, if you want to count till number 10.

On the other hand, a `while` loop is typically used when you don't know the number of iterations you need to make. For example, if you're waiting for user input, you might use a `while` loop to keep asking for input until the user enters a valid value. In this case, you don't know how many times the loop will execute, so you can use a `while` loop with a condition that checks for the validity of the input.

For example:

```js
let input;
while (input !== 'quit') {
  input = prompt('Enter a command or "quit" to exit:');
  console.log(`You entered: ${input}`);
}
console.log('Exited loop.');
```

`prompt` is a built-in function in JavaScript that displays a dialog box to the user with a message and an input field.
It allows you to accept user input.
The above code will repeatedly prompt the user to enter a command, and will print each input to the console. The loop will continue running as long as the user does not enter the word "quit", which will cause the loop to terminate.

# Do-While Loops

The do-while loop is similar to the `while` loop, but it executes the block of code at least once, even if the condition is `false`.
Here's the syntax:

```js
do {
  // code to be executed
} while (condition);
```

The condition statement is evaluated at the end of each iteration unlike the for and while loops, where it is evaluated at the beginning.
If it's `true`, the loop continues. If it's `false`, the loop stops.

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 0);
```

This loop will also print the number 0 to the console.
