---
template: ModuleTemplate
slug: your-first-javascript-program
title: 'Your First JavaScript Program: Hello World'
curriculum: javascript
thumbnail: /assets/hello_world_js.png
---

Hey there! Have you heard of JavaScript? It's a programming language that's commonly used to create interactive websites and web applications. It's been around since the mid-1990s and has become one of the most popular programming languages on the web.

One of the great things about JavaScript is its versatility and ease of use. Whether you want to validate user input on a form or create a complex web application, JavaScript can help you do it.

Even if you're new to programming, JavaScript is a great language to learn because it's relatively easy to pick up compared to other programming languages. In fact, it's so easy that in this post, I'll walk you through creating your first JavaScript program!

Before we get started, though, it's important to note that you should already be familiar with HTML and CSS to be able to follow along with this tutorial. But don't worry, once you've got those down, JavaScript will be a breeze!

# Setting up the Environment

Let's talk about setting up your environment for using JavaScript!

JavaScript can be used in web browsers as well as Node.js, which is a server-side JavaScript environment.

## JavaScript in Browsers

When using JavaScript in web browsers, it's mostly used to create dynamic and interactive web pages.
With JavaScript, you can make web pages that can respond to user actions like button clicks, form submissions, and mouse movements.

## JavaScript in Node.js

On the other hand, Node.js is a JavaScript runtime that uses the Chrome V8 JavaScript engine. It's primarily used for building server-side applications, like web servers, APIs, and command-line tools. The best part is that you can use the same language and codebase on both the client and server-side, which makes development more efficient and streamlined.

Even though there are some differences in how JavaScript is used in these two environments, the core language and syntax are the same. This means that you can use your existing JavaScript knowledge and skills to create both client-side and server-side applications.

# Hello World in Browser

To get started with JavaScript, you'll need a text editor and a web browser.
Some popular text editors include Visual Studio Code, Sublime Text, and Atom.
Once, you have your text editor up and running, you're ready to write your very first JavaScript program!

## Creating a HTML file

In your new project folder, create a new `index.html` file.
In the `index.html` file, we'll create a basic web page that includes our JavaScript program.

Start by adding the following code:

```html
<!DOCTYPE html>
<html>
<head>
	<title>My First JavaScript Program</title>
</head>
<body>
	<h1>Hello World!</h1>
	<script>
		// JavaScript code goes here
	</script>
</body>
</html>
```

This code creates a basic HTML document with a title and a heading. The `script` tag is where we'll add our JavaScript code.

## Writing the JavaScript Code Inline

Inside the script tag, we'll write our first JavaScript program.

```html
<!DOCTYPE html>
<html>
<head>
	<title>My First JavaScript Program</title>
</head>
<body>
	<h1>Hello World!</h1>
	<script>
		console.log("Hello World!");
	</script>
</body>
</html>
```

The `console.log()` function prints whatever is passed to it to the console.

### What is the Console?

Well, think of the console as a helpful tool that developers use to test and debug their JavaScript code.
It's a window that pops up in your web browser that displays messages, warnings, and errors that your code generates.

By using the console, developers can log important information about their code, like variable values, function calls, and error messages. This helps them identify and fix any issues with their code, making it more reliable and effective.

## Running the Program

To run the program, open the HTML file in your web browser and then open the Developer Tools of your web browser.
If you're using Google Chrome, you can also use the following shortcut to open Developer Tools:

Windows and Linux: Press Ctrl + Shift + J
Mac: Press Command + Option + J

Mozilla Firefox:

Windows and Linux: Press Ctrl + Shift + K
Mac: Press Command + Option + K

Safari:

Windows: Not supported
Mac: Press Command + Option + C

Additionally, you can also right-click on a web page and select "Inspect Element" to open the Developer Tools panel.

![Developer Tools in Chrome](/assets/developer_tools_chrome.png)

You should be able to see the "Console" tab, click on it!
If your JavaScript program is correct, you should see "Hello World!" inside the console!

Congratulations, you've just written your first JavaScript program!

## Including JavaScript Files

Previously, we wrote our JavaScript code inline inside the HTML file.
But you can also use the `script` tag to include individual JavaScript files inside a web page.

Let's create `script.js` file first and move the JavaScript code from inside the `script` tag to this file:

`index.html`:

```html
<!DOCTYPE html>
<html>
<head>
	<title>My First JavaScript Program</title>
</head>
<body>
	<h1>Hello World!</h1>
	<script>

	</script>
</body>
</html>
```

`script.js`:

```js
console.log("Hello World!");
```

If your JavaScript file is located in the same directory as your HTML file, you can include it on your web page like this:

```html
<script src="script.js"></script>
```

The `src` attribute takes the path to the JavaScript file that you want to include inside the HTML document.

Try opening `index.html` again in the browser and open the console to check if "Hello World!" was printed.

# Hello World in Console

Did you know that you can directly run JavaScript code inside the console itself?
Once the console is open, you can type in commands and see their output.

![Running JavaScript in the Console](/assets/console_hello_world.png)


# Hello World in Node.js

To be able to use Node.js, you must download it first.
Luckily installing Node.js is a straightforward process.
Here are the steps you can follow:

1. Go to the Node.js website (https://nodejs.org/en/) and download the appropriate installation file for your operating system (Windows, macOS, or Linux).
2. Once the download is complete, run the installation file and follow the prompts in the installation wizard to complete the installation.
3. During the installation process, you can choose the default settings or customize them according to your preferences.
4. Once the installation is complete, you can open a command prompt (on Windows) or terminal (on macOS or Linux) and type `node -v` to check that Node.js is installed correctly. This should display the version of Node.js that you installed.

Now that you have Node installed, you can run `script.js` inside Node using the `node <file_path>` command.

Open a command prompt or terminal and navigate to the directory where the file is saved.
Run the file using the following command:

```bash
node script.js
```

Node.js will print "Hello World!" to the console.

Congratulations, you've just created your first "Hello World" program using Node.js!

Of course, this is just the beginning of what you can do with JavaScript. With JavaScript, you can create interactive web applications, dynamic user interfaces, and much more.
Keep practicing and learning, and you'll be able to create amazing things with JavaScript in no time.
