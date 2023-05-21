---
template: ModuleTemplate
slug: comments-in-javascript
title: Comments in JavaScript
curriculum: javascript
thumbnail: /assets/comments_in_js.png
---

Writing code that's easy to read and understand is super important, not just for you, but for other developers who might need to work on your code too.
One helpful way to achieve this is by adding comments to your JavaScript code.
Comments can provide extra information about your code, like what a function does, how a particular code block works, or even tips on how to use your code.

In this post, we'll talk about the different types of comments you can use in JavaScript, as well as some tips for writing effective comments that are helpful for others.

# Types of Comments in JavaScript

There are two types of comments in JavaScript: single-line comments and multi-line comments.

## Single-line comments

Single-line comments start with two forward slashes `//`.
Everything that follows the slashes on that line, becomes a part of the comment.
They are used to add comments to a single line of code. For example:

```js
// This is a single-line comment
let a = 10; // Assigns the value 10 to variable a
// var x = 0; This is also a comment
```

## Multi-line comments

Multi-line comments start with `/*` and end with `*/`.
They are used to add comments to multiple lines of code.
For example:

```js
/*
This is a multi-line comment
that spans across multiple lines
*/
let b = 20; // Assigns the value 20 to variable b
```

You can also use the multi-line comment syntax to create single-line comments.

```js
const name = "John" /* I am a comment */
```

This is useful in cases where you want to comment out a part in the middle of the line of code.

```js
let /* const */ name = "John"
```

## Best Practices for Writing Comments

When it comes to writing comments in your JavaScript code, there are a few best practices to keep in mind:

1. Keep your comments clear and concise: Write comments in a way that's easy to read and understand. Avoid using technical jargon or complex language.
2. Use comments to explain your code: Comments should provide additional context about the code, including its purpose, how it works, and any limitations or potential issues.
3. Avoid unnecessary comments: Don't add comments to code that's already self-explanatory or repetitive.
4. Update comments as you make changes: If you modify your code, make sure to update the comments to reflect any new changes or functionality.
5. Stick to a consistent commenting style: Choose a commenting style and use it consistently throughout your codebase. This will make it easier for other developers to understand your code and make changes if needed.

# Final Words

Though comments are helpful for making your code more understandable, but they shouldn't be relied on too heavily. It's always a good idea to write clear and easy-to-understand code first and use comments only when necessary.

By following best practices for writing comments, you can ensure that they are helpful and easy to read, making it easier for other developers to work with your code.
