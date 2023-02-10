---
template: BlogPost
path: /blog/8-console-tricks-to-debug-like-a-pro
date: 2023-02-10T17:35:54.465Z
title: 8 Console Tricks To Debug Like A Pro
tags:
  - debugging
  - coding tips
  - javascript
featured: false
draft: true
travel: false
metaDescription: >-
  This blog post will explore console tricks that will help you debug like a
  pro.
author: Deeya Sethi
---
Debugging is a crucial part of the software development process. It helps you find and fix errors in your code. As a developer, you can save a lot of time and frustration by using the right tools and techniques to debug your code. This blog post will explore console tricks that will help you debug like a pro.

# console.table()

`console.table()` is useful when inspecting arrays and objects. It displays the data in a tabular format, making it easier to read. Here's an example:

```javascript
let users = [
  {name: 'John Doe', age: 30},
  {name: 'Jane Doe', age: 28},
  {name: 'Jim Doe', age: 33}
];
console.table(users);
```

In this example, you'll see the data in the user array displayed in a tabular format in the console.

# console.count()

`console.count()` is a handy tool to count the number of times a log is triggered. Here's an example:

```javascript
for (let i = 0; i < 10; i++) {
  console.count('Iteration');
}
```

In this example, the count of the iteration will be displayed in the console each time the log is triggered.

# console.group() and console.groupEnd()

`console.group()` and `console.groupEnd()` allow you to group related logs and inspect them as a whole. Here's an example:

```javascript
let users = [
  {name: 'John Doe', age: 30},
  {name: 'Jane Doe', age: 28},
  {name: 'Jim Doe', age: 33}
];
console.group('Users');
for (let user of users) {
  console.log(user.name);
}
console.groupEnd();

```

In this example, all logs related to the user's array will be grouped together, making it easier to inspect.

# Global variable

The global variable allows you to inspect the global scope and see all the variables and functions that are defined in it.

To do this, you can use the window object, the global object in web browsers. Here's an example:

```javascript
var name = 'John Doe';
var age = 30;
console.log(window.name, window.age);

```


In this example, the `console.log()` statement displays the values of the name and age variables, which are defined in the global scope and can be accessed through the window object. This technique can be helpful when you need to check the values of variables or functions in the global scope or when you want to debug a variable that you think might have been declared in the global scope by mistake.

# Copy property path trick

Copying an object's property path can be helpful when you need to access or manipulate a deeply nested property in an object. This trick is available in the JavaScript console in modern web browsers. You can right-click on the property you're interested in and select "Copy property path." Here's an example:

```javascript
let user = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};
console.log(user['address']['city']);

```

In this example, the `console.log()` statement displays the value of the city property of the address object, which is nested inside the user object. By using the "copy property path" trick, you can easily copy the path of a deeply nested property and access it in your code.

# Copy variables

The "copy variables" can be helpful when you want to inspect a variable's value or save it for later use.

This trick is available in the JavaScript console in modern web browsers. You can right-click on the variable you're interested in and select "Store as a global variable" or "Store as a local variable." Here's an example:

```javascript
let name = 'John Doe';


```


In this example, the `console.log()` statement displays the value of the name variable. By using the "copy variables" trick, you can easily copy the value of a variable and store it in a global or local scope for later use. This can be useful when you want to inspect the value of a variable, save it for later use, or when you want to test a piece of code with a specific value.

# Store elements as variables

The "store element as variable" allows you to save a reference to a DOM element in a variable, which can be helpful in inspecting or manipulating an element on a web page.

This trick is available in the JavaScript console in modern web browsers. To use it, you can right-click on the element in the HTML view of the page and select "Store as a global variable." Here's an example:

```javascript
let header = document.querySelector('header');
console.log(header);

```


In this example, the `document.querySelector()` method is used to select the header element on the web page. By using the "store element as variable" trick, the reference to this element is stored in the header variable, which can then be used to inspect or manipulate the element in the JavaScript console. This can be useful when you want to inspect the properties of an element, test changes to its style, or when you want to debug an issue with a specific element on the page.

# Access the value of the last operation

The "access the value of the last operation" trick is a debugging technique in JavaScript that allows you to access the value of the last expression that was evaluated in the JavaScript console, which can be helpful when you want to inspect or use the result of a calculation or expression.

This trick is available in the JavaScript console in modern web browsers, and the symbol used to access the value is "_" (underscore). Here's an example:

```javascript
let x = 10;
let y = 20;
console.log(x + y);

let result = _;
console.log(result);

```

In this example, the `console.log()` statement displays the result of the calculation x + y, which is 30. Using the "access the value of the last operation" trick, the value of the last expression is stored in the result variable, which can then be used to inspect or use the result. This can be useful when you want to use the result of a calculation or expression in further computations or when you want to debug an issue with a specific calculation.
