---
template: ModuleTemplate
slug: strings
title: Strings in JavaScript
curriculum: javascript
path: /curriculum/javascript/strings
thumbnail: /assets/strings-in-js.png
---

# Introduction

Strings play a crucial role in programming when it comes to working with text-based data. They allow you to store and manipulate sequences of characters, such as words, sentences, or even entire paragraphs.

You can create strings in JavaScript by enclosing text within single quotes ('').

```javascript
const message = 'Hello, world!';
```

Or you can use double quotes:

```javascript
const greeting = "Welcome to our website!";
```

You can combine or concatenate multiple strings using the concatenation operator `+`. This allows you to create longer strings by joining smaller ones together. For example:

```javascript
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
```

# Accessing and Modifying Strings

Similar to arrays, each character within a string is assigned an index value, starting from 0 for the first character.
This allows you to access and refer to specific characters within a string by their position.

```js
const str = "Hello";
const firstCharacter = str[0]; // H
const secondCharacter = str[0]; // e
const thirdCharacter = str[0]; // l
```

Unlike arrays, strings are immutable in JavaScript, this means that you cannot directly change a specific character.

```javascript
let str = "Hello";
str[0] = "Y";
console.log(str); // Hello
```

# String methods & properties

JavaScript provides several useful properties and methods that allow you to work with strings more effectively. Let's explore some of the commonly used ones.

Similar to array, string also has a  `length` property.
It returns the number of characters in a string.
You can use it to determine the size of a string.

`toUpperCase()` and `toLowerCase()` allow you to change the case of any string, the `toUpperCase()` method converts all characters in a string to uppercase, whereas the `toLowerCase()` method converts all characters in a string to lowercase.

```js
const message = 'Hello, world!';
console.log(message.toUpperCase()); // HELLO, WORLD!
console.log(message.toLowerCase()); // hello, world!
```

The `trim()` method removes any leading and trailing whitespace from a string. It's commonly used to clean up user inputs and eliminate unnecessary spaces.

```js
const name = prompt("Enter name"); // "    John    "
console.log(name.trim()); // John
```

You can use the `charAt()` method to find the character at a specified index in a string.

```js
const message = 'Hello, world!';
console.log(message.charAt(4)); // o
```

Another way to add two or more strings together is by using the `concat()` method.

```js
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName.concat(' ', lastName);

console.log(fullName); // John Doe
```

These are many more string methods available in JavaScript that enable you to manipulate and transform strings to suit your specific needs.

# Substrings

Substrings are an important concept in JavaScript when it comes to working with strings.
They are a part of the string.
For example, "Hello" is a substring of "Hello, world!".

Substrings can be incredibly useful when you need to manipulate or retrieve specific parts of a string.

To create a substring in JavaScript, you can use the `substring()` method. This method takes two parameters: the starting index and the optional ending index. The starting index indicates the position where the substring should begin, while the ending index (if provided) indicates the position where the substring should end (not inclusive).

Here's an example to illustrate the usage of `substring()`:

```javascript
const message = "Hello, world!";
const substring = message.substring(7, 12);
console.log(substring); // world
```

You can also use `substring()` with a single argument, which represents the starting index. In this case, the substring will extend from the specified index to the end of the original string.

```javascript
const message = "Hello, world!";
const substring = message.substring(7);
console.log(substring); // world!
```

Substrings are versatile and can be used in various scenarios, such as extracting specific portions of text, manipulating string data, or performing comparisons.

```js
let str = "Hello";
str = str.substring(0, 3) + "p";
console.log(str) // Help
```

They provide you with fine-grained control over the contents of a string, allowing you to work with smaller, more focused parts of the overall text.

# Working with Special Characters

Have you ever encountered situations where you needed to include special characters within your strings in JavaScript?
Special characters, such as newline characters or quotation marks, can sometimes cause issues when you want to represent them as literal values. But worry not! JavaScript provides a solution for this through escape sequences.

Escape sequences are special combinations of characters that allow you to represent certain special characters within strings. They begin with a backslash (\) followed by a specific character, and when used in a string, they are interpreted differently by JavaScript.

For example, let's say you want to include a string that contains a double quotation mark:

```javascript
const message = "She said, \"Hello!\"";
console.log(message); // She said, "Hello!"
```

By using the `\"` escape sequence, JavaScript understands that the double quotation mark is part of the string and not the end of it.

Similarly, you can apply escape sequences for other special characters as well, based on your specific needs.
Let's take a look at some commonly used escape sequences and their purposes:

- `\n`: This represents a newline character and is used to insert line breaks within a string. For example, if you want to create a multiline string, you can use `\n` to separate different lines.

```js
const message = "Hello there!\nWelcome to The Code Dose.\nWe're glad to have you here.\nEnjoy your stay!";
console.log(message)
```

The output of the above code will be:

```
Hello there!
Welcome to The Code Dose.
We're glad to have you here.
Enjoy your stay!
```

- `\t`: This represents a tab character and is used to create indentation or align text in a structured manner. It can be helpful when you want to present information in a formatted way.

- `\'`: This represents a single quotation mark and is used to include single quotes within a string that is enclosed by single quotes. By using the escape sequence `\'`, JavaScript treats it as a literal single quotation mark instead of the end of the string.

# Template Literals

String template literals were introduced in ECMAScript 2015 (ES6) to provide you a more powerful and convenient way to work with strings in JavaScript.
They offer a concise syntax for creating dynamic strings with embedded variables and expressions, enhancing readability and flexibility compared to traditional string concatenation.

You can create template literals by enclosing text within backticks, \`\`, instead of single quotes or double quotes.

```js
let greeting = `Hello`;
```

One of the key advantages of using template literals is the ability to include placeholders, denoted by the `${}` syntax, which can be used to insert variables or expressions directly into the string.

For example, consider the following code snippet:

```javascript
const name = "Alice";
const age = 28;

const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); // Hello, my name is Alice and I am 28 years old.
```

You can also include expressions within the `${}` placeholders.
This allows you to create more dynamic strings.

```javascript
const x = 10;
const y = 5;

const result = `The sum of ${x} and ${y} is ${x + y}.`;

console.log(result); // The sum of 10 and 5 is 15.
```

Template literals also preserve line breaks and whitespace.
This makes them perfect for creating multiline strings without the need for manual concatenation or escaping characters.

```js
const message = `
  Hello there!
  Welcome to The Code Dose.
  We're glad to have you here.
  Enjoy your stay!
`;
```
