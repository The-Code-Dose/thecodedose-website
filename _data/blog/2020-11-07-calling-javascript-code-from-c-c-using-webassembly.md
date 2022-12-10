---
template: BlogPost
path: /blog/loading-webassembly-modules-in-javascript
date: 2020-11-07T11:18:10.773Z
title: Loading WebAssembly Modules in JavaScript
tags:
  - webassembly
  - c
  - c++
  - javascript
  - tutorial
metaDescription: >-
  Today, we will be talking about the various ways in which we can load .wasm
  modules in our JavaScript code. We will be using C++ code to compile .wasm
  modules. You need to have Emscripten downloaded and installed to follow the
  examples below.
draft: false
thumbnail: /assets/1_wm8F4bRLH4TXykwK6gAPoA.png
---
If you don't already know what WebAssembly is, I highly recommending reaidng more about it. According to the official website, WebAssembly is described as below —

> WebAssembly (abbreviated*Wasm*) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

For the purpose of this article, I am going to assume that you are aware of what it is and what it aims to achieve.

**Disclaimer:** *I don’t claim to be an expert in WebAssembly. Most of my knowledge of this article comes from [“Learn WebAssembly”](https://www.packtpub.com/product/learn-webassembly/9781788997379)— by Mike Rourke, <https://emscripten.org/>,[WebAssembly on MDN](https://developer.mozilla.org/en-US/docs/WebAssembly). If you find any errors in the article below, please let me know! I am just learning and playing around with it.*

We have two API specifications for interacting with WebAssembly modules — the WebAssembly JavaScript Interface (JavaScript API) and the WebAssembly Web API.

Today, we will be talking about the various ways in which we can load .wasm modules in our JavaScript code. You need to have Emscripten [downloaded and installed](https://emscripten.org/docs/getting_started/downloads.html#) to follow the examples below.

# Using WebAssembly Object

We are going to use a C++ program to demonstrate the same. Below is a simple function to add two numbers —

```cpp
extern "C" {
  int Sum(int a, int b) {
    return a + b;
  }
}
```

First, let’s compile our main.cc into a .wasm module without generating any glue code that Emscripten provides.

`$ em++ -std=c++11 main.cc -Os -s WASM=1 -s SIDE_MODULE=1 -s BINARYEN_ASYNC_COMPILATION=0 -o main.wasm`

For loading and using a WebAssembly module in JavaScript, it requires the following three steps-

* First, get `.wasm`bytes and convert it into a typed array or an`ArrayBuffer`
* Compile the bytes into a `WebAssembly.Module`
* Instantiate the `WebAssembly.Module`

The JavaScript API has a global `WebAssembly`object available in the browser. It acts as the namespace for all WebAssembly-related functionality. It has the following static methods —

* `WebAssembly.instantiate()`is used to compile and instantiate bytes at the same time. It returns both a`Module`and it's first`Instance`.
* `WebAssembly.instantiateStreaming()`performs the same functionality as instantiate(), but it uses streaming to compile and instantiate the module, which eliminates an intermediate step of converting the .wasm bytes into an ArrayBuffer.
* `WebAssembly.compile()`only compiles a WebAssembly module, but doesn’t instantiate it
* `WebAssembly.compileStreaming()`also only compiles a WebAssembly module, but it uses streaming similar to instantiateStreaming() thus eliminating the intermediate step.
* `WebAssembly.validate()`checks the WebAssembly binary code to ensure the bytes are valid and returns true or false.

## Using WebAssembly.instantiate()

Create an `index.html `file and add a script tag where we will fetch our main.wasm file. We will be using the fetch API here but you can also use XMLHttpRequest ([read how to use it here](https://developer.mozilla.org/en-US/docs/WebAssembly/Loading_and_running)). We then create an `ArrayBuffer `of the response and instantiate it using WebAssembly.instantiate(). The result contains the instance object that we need to reference to call exported functions from the module.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple template</title>
  </head>
  <body>
    <script>
      const importObject = {
        module: {},
        env: {
          memory: new WebAssembly.Memory({ initial: 256 }),
        }
      };
      fetch('main.wasm').then(response =>
        response.arrayBuffer()
      ).then(bytes =>
        WebAssembly.instantiate(bytes, importObject)
      ).then(results => {
        const Sum = results.instance.exports.Sum;
        console.log(Sum(2,3));
        console.log(Sum(1000, 23));
      });
    </script>
  </body>
</html>
```

## Streaming the WebAssembly module

The newer WebAssembly.compileStreaming/WebAssembly.instantiateStreaming methods are a lot more efficient — they fetch, compile/instantiate a module all in one step, directly from the raw bytecode, cutting out the need for the ArrayBuffer step.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple template</title>
  </head>
  <body>
    <script>
      const importObject = {
        module: {},
        env: {
          memory: new WebAssembly.Memory({ initial: 256 }),
        }
      };

      WebAssembly.instantiateStreaming(
        fetch('main.wasm'),
        importObject
      ).then(result => {
        const Sum = result.instance.exports.Sum;
        console.log(Sum(4, 5));
        console.log(Sum(10, 10));
      });
    </script>
  </body>
</html>
```

# Using Emscripten’s Module Object

For this example, we will be using the following C++ file —

```cpp
#include <emscripten/emscripten.h>

extern "C" {
  EMSCRIPTEN_KEEPALIVE int Sum(int a, int b) {
    return a + b;
  }
}
```

`EMSCRIPTEN_KEEPALIVE `forces LLVM to not dead-code-eliminate a function. We wrap our function in extern “C” block to avoid name mangling which happens in C++.

Now compile it into main.wasm and generate some glue code javascript as well —

`$ em++ -std=c++11 main.cc -o main.js -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'`

The above command tells Emscripten to generate main.wasm and main.js which contains Emscriptens’s *Module* object. Emscripten provides two functions for calling compiled C/C++ functions from JavaScript: ccall() and cwrap(). EXTRA_EXPORTED_RUNTIME_METHODS exports ccall and cwrap functions which can then be accessed from Module object.

The Module object is available globally after including main.js in our index.html file.

> The Module provides some helpful functionality out of the box that would otherwise require a custom implementation in WebAssembly. Emscripten’s Module can be seen as a combination of WebAssembly’s Module and Instance objects, which are present in the result object that WebAssembly’s instantiation function returns.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple template</title>
    <script src="main.js"></script>
  </head>
  <body>
    <script>
      Module.onRuntimeInitialized = () => {
        const Sum = Module.cwrap('Sum', 'number', ['number', 'number']);
        console.log(Sum(5, 5));
        console.log(Sum(0, 45));
      };
    </script>
  </body>
</html>
```

`Module.onRuntimeInitialized()`is called when the runtime is fully initialized, that is, when compiled code is safe to run, which is after any asynchronous startup operations have completed (such as asynchronous WebAssembly compilation, file preloading, etc.). If you don’t use this, you might encounter the following error —

``Uncaught RuntimeError: abort(Assertion failed: native function `Sum` called before runtime initialization) at Error``

Module.cwrap(*ident*, *returnType*, *argTypes*) returns a native JavaScript wrapper for our exported C++ function. It can be reused as many times as needed whereas Module.ccall(*ident*, *returnType*, *argTypes*, *args*, *opts*) executes a compiled C++ function from JavaScript and returns the result.

Thank you for reading! I will be writing more about how to call JavaScript functions in our C/C++ using Emscripten in the next post.
