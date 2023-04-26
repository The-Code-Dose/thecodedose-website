---
template: BlogPost
path: /blog/variables-and-constants-in-javascript
date: 2023-04-26T20:37:42.146Z
title: Variables & Constants in JavaScript
tags:
  - javascript
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/variables_js.png
---

JavaScript is a versatile programming language that allows you to create dynamic and interactive web applications.
One of the core concepts of any programming language is variables, which enable you to store and manipulate data in your code.

In this post, we'll explore what variables are, how to declare and assign values to them, and some best practices for working with variables in JavaScript.

If you haven't read the previous post in this series already, [read it here to write your first JavaScript program](https://www.thecodedose.com/blog/your-first-javascript-program)!

# What Are Variables?

Variables are containers that hold values of different types, such as numbers, strings (or text), or boolean values (logical values of `true` and `false`).
You can think of them as named locations for storing data.
For example, `x = 10` where `x` is a variable and it stores the value `10` currently.
These values can be used and manipulated throughout your code, making it more flexible and dynamic.

In JavaScript, you can declare variables using the `var`, `let`, or `const` keywords.
Each of these keywords has a different scope and behavior, which we'll explore in more detail later in this post.

# Declaring and Assigning Values to Variables

To declare a variable, you simply need to use one of the keywords (`var`, `let`, or `const`) followed by the variable name.
For example, to declare a variable named `age`, you can use the following code:

```javascript
var age;
```

Once you've declared a variable, you can assign a value to it using the `=` operator.
For example, to assign the value `30` to the `age` variable, you can use the following code:

```javascript
age = 30;
```

You can also assign a value to a variable at the time of declaration, like this:

```javascript
var name = "John";
```

You can also use the `let` keyword to create variable.
For example:

```javascript
let age = "30";
let name;
name = "John";
```

There's a slight difference between the scopes of the variables created by `var` and `let`.
However, we'll cover that in a future post.
For now, you can assume that you can use them interchangeably.

# Constants

Sometimes you may have a value that you don't want to change throughout your code. That's where constants come in.

Constants in JavaScript are variables whose value cannot be changed once they are defined. This means that they are read-only and cannot be reassigned or modified.

To declare a constant in JavaScript, you use the `const` keyword followed by the variable name and the initial value:

```javascript
const pi = 3.14;
```

In this example, `pi` is a constant that is initialized with the value `3.14`.
You must always assign a value at the time of declaring a constant.
Once `pi` is defined, you cannot change its value.

```javascript
pi = 3; // Uncaught TypeError: Assignment to constant variable.

const x; // Uncaught SyntaxError: Missing initializer in const declaration
```

Constants are useful for storing values that should not be changed throughout your code, such as mathematical constants like pi, or configuration values like URLs and API keys.

# Best Practices

Here are a few best practices for working with variables in JavaScript:

- Use descriptive variable names that accurately reflect their purpose. This makes it easier for other developers (and yourself!) to understand your code.
- Use `const` for values that should not change throughout your code, and use `let`/`var` for values that can change.
- In JavaScript, it's common to use `camelCase` for variable names. This means that the first word is lowercase and subsequent words are capitalized. For example, `firstName` or `userAge`.

I hope you found this post helpful!
