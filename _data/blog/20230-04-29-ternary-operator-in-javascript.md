---
template: BlogPost
path: /blog/ternary-operator-in-javascript
date: 2023-04-29T11:37:42.146Z
title: Ternary Operator in JavaScript
tags:
  - javascript
  - beginners
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/ternary_operator.png
---

Read the previous post in this series here: [If/Else Statements in JavaScript](https://www.thecodedose.com/blog/if-else-statements-in-javascript)

Now that you know how to write conditional statements using `if`/`else if`/`else`, lets take a look at a new operator: `?` ternary operator.

# Simplifying If/Else

Have you ever written an if/else statement that felt a bit too long and cluttered?
The ternary operator can simplify your code by allowing you to write the same logic in a single line. Take a look at this example:

```js
const age = 15;
if (age >= 18) {
  console.log("Adult!");
} else {
  console.log("Not an adult"!);
}
```

This if/else statement can be rewritten using the ternary operator like this:

```js
const age = 15;
age >= 18 ? console.log("Adult!") : console.log("Not an adult"!);
```

The ternary operator works like an if/else statement. It checks a condition and returns one of two values depending on whether the condition is true or false.

```js
condition ? exp1 : exp2
```

If the condition is `true`, `exp1` is executed. If the condition is `false`, `exp2` is executed instead.

# Best Practices

While the ternary operator can make your code more concise, it should be used carefully and only in situations where it improves readability and reduces the number of lines of code. When used properly, the ternary operator can make your code easier to read and understand.

Read the next post in this series here: [What is Truthy and Falsy in JavaScript](https://www.thecodedose.com/blog/truthy_and_falsy_in_js)
