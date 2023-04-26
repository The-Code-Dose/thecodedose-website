---
template: BlogPost
path: /blog/blocks-scope-and-hoisting-in-javascript
date: 2023-04-26T21:37:42.146Z
title: 'Blocks, Scope & Hoisting in JavaScript'
tags:
  - javascript
  - beginners
  - hoisting
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/blocks_scope_js.png
---

Read the previous post in this series here: [Variables & Constants in JavaScript](https://www.thecodedose.com/blog/variables-and-constants-in-javascript)

In the last post, you learned how to create variables in JavaScript using `var` and `let`.
But what's the difference between these two?
To understand that, you need to learn the following three important concepts in JavaScript: blocks, scope, and hoisting.

# Blocks

Any set of statements that are surrounded by the curly braces `{}` form a block in JavaScript.

```js
{
  // This is a block
  const greeting = "Hello World";
  console.log(greeting);
}
```

Blocks can be used to group statements together and to control the flow of code. For example, a block can be used to define the body of a function, the body of an if statement, or the body of a loop (You'll learn about these in later posts).

You can even nest a block within another.

```js
{
  const greeting = "Hello World";
  const x = 5;
  {
    console.log(greeting);
    console.log(5);
  }
}
```

Blocks introduce a new scope for your variables.
But what is a scope?

# Scope

Scope refers to the visibility and accessibility of variables in a program.

Try this:

```js
{
  let x = 2;
  console.log(x); // 2
}
console.log(x); // Uncaught ReferenceError: x is not defined
```

When you try to print the `let` variable outside of the scope of the block it was declared in, JavaScript throws an error saying that `x` is not defined.
This means that `let` variables only live inside the scope in which they are defined in.
In other words, the scope of `let` variables is same as the scope of the block they're defined in.

Similarly, the scope of `const` variables is also same as the scope of the block they're defined in.

```js
{
  const x = 2;
  console.log(x); // 2
}

console.log(x); // Uncaught ReferenceError: x is not defined
```

In JavaScript, there are two types of scope: global scope and local scope.

# Hoisting

What happens when you try this with `var` variables?

```js
{
  var x = 2;
  console.log(x); // 2
}

console.log(x); // 2
```

JavaScript does not throw any error and executes perfectly in this case!
This is because of something known as hoisting.

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during compilation.

```js
// behaves as if var x was declared on the top here
{
  var x = 2;
  console.log(x); // 2
}

console.log(x); // 2
```

This means that you can even use `var` variables before they are declared!

```js
// behaves as if var x was declared on the top here
console.log(x); // undefined
{
  var x = 2;
  console.log(x); // 2
}

console.log(x); // 2
```

However, note that only the declaration is hoisted, not the assignment.
That's why logging `x` before the block begins prints `undefined` because no value has been assigned to it yet.

It's important to note that `let` and `const` declarations are not hoisted in the same way that `var` declarations are.

## The Global Scope

Can you tell what's the scope of `x` in this case?

```js
var x = 0
```

`x` is said to be in the global scope in this case.
Global scope contains all the other scopes, its the top most level scope of any program.
Global scope refers to variables that are defined outside of any block and can be accessed from anywhere in the program.
On the other hand, local scope refers to variables that are defined inside a block scope and can only be accessed within that block.
Blocks can be of different kinds: code blocks, control blocks and function blocks.

```javascript
// global scope
let x = 10;

{
  // local scope
  let y = 20;
  console.log(x + y);
}

console.log(x + y); // ReferenceError: y is not defined
```

# Practice

Can you guess what will be the output of the following code?

```js
console.log(x);
{
  {
    {
      var x = 3;
    }
  }
}
```

Answer:

```
undefined
```

This is because `x` is hoisted to the top level scope.


What will be the output of this code?

```js
console.log(x);
{
  var x = 2;
  {
    console.log(x);
    let x = 5;
    x = 3;
  }
  console.log(x);
}
```

This will throw a `ReferenceError` because the variable `x` is declared with `let` inside a block, and then accessed before it is declared.
