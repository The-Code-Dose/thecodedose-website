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
draft: false
travel: false
metaDescription: >-
  This blog post will explore console tricks that will help you debug like a
  pro.
thumbnail: /assets/console_tricks_thumbnail.png
author: Deeya Sethi
---
Debugging is a crucial part of the software development process. It's the act of finding and fixing errors in your code. As a developer, you can save a lot of time and frustration by using the right tools and techniques to debug your code. This blog post will explore some console tricks that will help you debug JavaScript like a pro.

# console.table()

`console.table()` is useful when inspecting arrays and objects. It displays the data in a tabular format, thus making it easier to read.

```javascript
let users = [
  {name: 'John Doe', age: 30},
  {name: 'Jane Doe', age: 28},
  {name: 'Jim Doe', age: 33}
];
console.table(users);
```

This is the output that it produces:

![Console Table Output](/assets/console_table.png)

# console.count()

`console.count()` is a handy tool to count the number of times a log is triggered. For example:

```javascript
for (let i = 0; i < 10; i++) {
  console.count('Iteration');
}
```

![Console Count Output](/assets/console_count.png)

# console.group() and console.groupEnd()

`console.group()` and `console.groupEnd()` allow you to group related logs and inspect them as a whole under a toggle. Here's an example:

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

![Console Group Toggle](/assets/console_group_1.png)
![Console Group Toggle](/assets/console_group_2.png)

# Store values and elements as variables

This trick is available in the JavaScript console in modern web browsers. You can right-click on the variable you're interested in and select "Store as a global variable".

By doing this, you can easily copy the value of a variable and store it in a global or local scope for later use. This can be useful when you want to inspect the value of a variable, save it for later use, or when you want to test a piece of code with a specific value.
You can even store any element from the DOM as a global variable and play around with it in the console.
This can be useful when you want to inspect the properties of an element, test changes to its style, or when you want to debug an issue with a specific element on the page.

![Global Variable](/assets/global_variable.png)

# Copy property path

Copying an object's property path can be helpful when you need to access or manipulate a deeply nested property in an object. This trick is available in the JavaScript console in modern web browsers. You can right-click on the property you're interested in and select "Copy property path."

![Property Path](/assets/property_path.png)

# copy()

You can copy values from the browser console to your clipboard using `copy()`.
This is usesful when you want to inspect large arrays or objects.

![Copy](/assets/copy_browser_console.png)

# Access the value of the last operation

You can access the value of the last expression that was evaluated in the JavaScript console using `&_` operator.
This can be helpful when you want to inspect or use the result of a calculation or expression.

```javascript
let x = 10;
let y = 20;
console.log(x + y);

let result = _;
console.log(result);
```

![Access Last Value](/assets/access_last_value.png)
