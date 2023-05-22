---
template: ModuleTemplate
slug: functions-in-javascript
title: Functions in JavaScript
curriculum: javascript
path: /curriculum/javascript/functions-in-javascript
thumbnail: /assets/functions_in_js.png
---

Today, we're diving into functions and why they're so important in programming.
So, let's jump right in!

# What are Functions?

Functions allow you to organize and reuse code, thus making your programs more efficient and easier to manage.
They play a crucial role in JavaScript, enabling you to create modular and scalable code.

A function is declared using the `function` keyword followed by the name of the function.
A function has a function body, some block of code that is executed whenever you "call a function".

```js
// Declaring a function
function func_name() {

}

// Calling a function
func_name()
```

Calling a function simply means that you want to execute the lines of code within that function.

Take a look at this example:

```js
const name1 = prompt("Enter your name!");
console.log("Hello", name1);

console.log("One more time!");

const name2 = prompt("Enter your name!");
console.log("Hello", name2);
```

In the above code, we prompt the user to enter their name using the `prompt()` function and store the input in the variables `name1` and `name2`.
Then, log a greeting message to the console.
We are repeating the same two steps twice.
This is where functions come in handy.
You can move these steps into a function that can be invoked anywhere.

```js
function greetUser() {
  const name = prompt("Enter your name!");
  console.log("Hello", name);
}

greetUser();
console.log("One more time!");
greetUser();
```

By using a function, you eliminate the need for repetitive code and make your code more maintainable.
You can think of a function call this way:
Whenever you call a function, that line of code is replaced with the contents of the function body.

# Function Arguments & Return Values

What makes functions even more powerful are the arguments they can take and the values they can return.

Function arguments are the inputs you provide to a function, allowing you to pass values for the function to work with.
They serve as a way to customize the behavior of a function based on specific data or requirements.

Consider the following example:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Bob"); // Hello, Bob!
```

In this case, the `greet` function takes an argument `name`, which allows you to pass different names each time we call the function. This flexibility allows the function to greet any person you specify, making it more versatile and adaptable.

But what happens if you don't pass the `greet` function a name?

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet(); // Hello undefined!
```

Since variables that are not assigned any value take the value of `undefined` by default, function arguments also behave the same way.

Function arguments can be as simple as a single value or complex objects with multiple properties.
You can even pass in multiple arguments like this:

```js
function calculateArea(length, width) {
  const area = length * width;
  console.log(area);
}

const length1 = 5;
const width1 = 3;
calculateArea(length1, width1); // 15


const length2 = 8;
const width2 = 4;
calculateArea(length2, width2); // 32
```

Return values are the outputs or results that a function provides after performing its operations. They allow functions to produce meaningful and useful information that can be further utilized in our code.

Let's look at an example:

```javascript
function add(a, b) {
  return a + b;
}

const sum = add(5, 3);
console.log(sum); // 8
```

In this case, the `add` function takes two arguments `a` and `b`, and returns their sum using the `return` statement. By capturing the return value in a variable (`sum`), you can store and use the calculated result later in the program.
Unlike arguments, a function can only have one return value in JavaScript.
However, you can use data structures like arrays and object to return a collection of values.

```javascript
function calculateSumAndDifference(a, b) {
  return [a + b, a - b];
}

const result = calculateSumAndDifference(5, 3);
console.log(result[0], result[1]); // 8, 2
```

# Function Declaration vs. Function Expression

When it comes to working with functions in JavaScript, you have two popular approaches to choose from: function declaration and function expression. Understanding the differences between these two methods and their respective pros and cons can help you make informed decisions when writing your code.

We've already covered function declarations.
They are one of the simplest ways to define a function in JavaScript. With this approach, you declare a function using the `function` keyword, followed by the function name and the code block.

```javascript
function greet() {
  console.log("Hello there!");
}

greet(); // Call the function
```

Another way to create functions is using function expressions.
They offer a more flexible way to define functions. With this approach, you assign a function to a variable or a constant. Here's an example to illustrate:

```javascript
const greet = function() {
  console.log("Hello there!");
};

greet(); // Call the function
```

Function expressions provide the flexibility to assign functions to variables, allowing you to treat functions as first-class citizens in JavaScript. You can pass functions as arguments, return them from other functions, or store them in data structures like arrays or objects. This flexibility is particularly useful when working with concepts like callbacks and higher-order functions.

One potential drawback of function expressions is that they lack a function name. This makes debugging more challenging, as the function name won't appear in the stack trace.

# Arrow Functions

There's another way to create function expressions, using arrow functions.
Arrow functions have gained popularity for their concise syntax and powerful capabilities.
Instead of the `function` keyword, arrow functions are defined using an arrow (`=>`) between the parameter list and the function body. Here's an example to get you started:

```javascript
const greet = () => {
  console.log("Hello there!");
};

greet(); // Call the arrow function
```

One of the major advantages of arrow functions is their concise syntax. When you have a single expression to return, you can skip the curly braces and the `return` keyword. This streamlined approach helps you reduce the visual noise in your code. Here's an example to demonstrate the difference:

```javascript
// Regular function
function sum(a, b) {
  return a + b;
}

// Arrow function
const sum = (a, b) => a + b;
```

Arrow functions also have an implicit return, meaning that you don't need to explicitly write the `return` statement for simple expressions. This further enhances code readability and reduces unnecessary boilerplate.

# IIFE (Immediately Invoked Function Expressions)

An IIFE is a way to create a self-executing function in JavaScript. It allows us to define a function and immediately execute it within the same expression.
Let's take a look at the syntax of an IIFE:

```javascript
(function() {
  // Code goes here
})();
```

By wrapping the function within parentheses `(function(){})`, we create a function expression. Adding an extra pair of parentheses `()` at the end immediately invokes the function.

```js
(function() {
  console.log("Hello World!")
})(); // Hello World!
```

# Function Scope and Hoisting

Hoisting is a JavaScript behavior that involves the process of moving variable and function declarations to the top of their containing scope during the compilation phase. This means that regardless of where you declare a variable or function within a scope, they are effectively "hoisted" to the top of that scope.

Function declarations and function expressions are treated differently when it comes to hoisting.

When a function is declared using the `function` keyword, it is considered a function declaration. The entire function, including its body, is hoisted to the top of its containing scope. This allows you to call the function before its actual declaration in your code.

Here's an example to illustrate function declaration hoisting:

```javascript
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

In this case, the `sayHello` function is called before its declaration. Surprisingly, it works without any errors, thanks to hoisting. JavaScript moves the function declaration to the top of the scope, ensuring it's available for execution.

Function expressions, on the other hand, behave differently when it comes to hoisting. In a function expression, a function is assigned to a variable or used as an argument for another function. Hoisting in this case only applies to the variable declaration, not the function itself.

Let's see an example:

```javascript
sayHello();

var sayHello = function() {
  console.log("Hello!");
};
```

In this example, we encounter a reference error. The reason is that the variable `sayHello` is hoisted to the top, but it is assigned `undefined` before the function expression is encountered. Therefore, trying to call it before the assignment leads to an error.
