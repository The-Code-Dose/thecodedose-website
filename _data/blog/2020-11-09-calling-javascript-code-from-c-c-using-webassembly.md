---
template: BlogPost
path: /blog/calling-javascript-code-from-cpp-using-webassembly
date: 2020-11-09T13:19:34.627Z
title: Calling JavaScript code from C/C++ using WebAssembly
tags:
  - javascript
  - webassembly
  - emscripten
  - c++
  - c
metaDescription: >-
  Learn how to call C/C++ inside JavaScript code using WebAssembly. In this
  article, we will be discussing different approaches using Emscripten and
  without using Emscripten.
thumbnail: /assets/pexels-eugene-shirokov-5739049.jpg
draft: false
author: Urvashi
---
In the last blog post, we talked about [calling C/C++ code from JavaScript using WebAssembly and Emscripten](https://thecodedose.com/blog/loading-webassembly-modules-in-javascript). Today, we will be discussing how to call JavaScript code from C/C++ with and without Emscripten.

# Using the import object

Remember how we passed an import object to instantiate our WebAssembly modules last time? Today, we will be talking about it in more detail.

***importObject***(Optional)

> An object containing the values to be imported into the newly-created `Instance`, such as functions or `WebAssembly.Memory` objects. There must be one matching property for each declared import of the compiled module or else a `WebAssembly.LinkError` is thrown.

We will be passing our JavaScript function in the env argument of the importObject. Building on our example from last time —

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
        env: {
          consoleLog: console.log,
        }
      };

      WebAssembly.instantiateStreaming(
        fetch('main.wasm'),
        importObject
      ).then(result => {
        const Sum = result.instance.exports.Sum;
        Sum(4, 5);
        Sum(10, 10);
      });
    </script>
  </body>
</html>
```

Here, we have passed the `console.log` function to my WebAssembly module. Our C++ program will receive `console.log`and call it by calling `consoleLog`. You can write and pass your own functions as well.

## Calling imported functions in C/C++

In our C++ file, we need to define the consoleLog function that it will receive from JavaScript. The function signature must match what you passed in. `Sum` is the function we have exported to JavaScript and are using above in our index.html file as `result.instance.exports.Sum`

```cpp
extern "C" {
  // Wrapper for our JavaScript function
  extern void consoleLog(int sum);

  int Sum(int a, int b) {
    int sum = a + b;
    consoleLog(sum);
    return sum;
  }
}
```

`em++ -std=c++11 main.cc -Os -s WASM=1 -s SIDE_MODULE=1 -o main.wasm`

When we call the C++ `Sum` function in our JavaScript code, it will log the result to the console before returning it.

# Using Emscripten

We will be discussing the following two approaches for calling JavaScript code from C/C++ —

* Running a script using emscripten_run_script()***(slower)***
* Writing inline JavaScript***(faster)***

## Using emscripten_run_script()

**void** `emscripten_run_script`**(const char*\*script*)**is the most direct way of calling JavaScript from C/C++. It effectively runs the code using`eval()`which is a JavaScript function that evaluates code represented as a string. It is suited for purposes such as debugging but for better performance, you should write JavaScript “inline”.

`emscripten_run_script("console.log('hello world')");`

You can also use `emscripten_run_script_int` if the result of the evaluation returns an int or `emscripten_run_script_string` if the evaluation returns a string.

## Using Inline JavaScript

A faster way is to write “inline JavaScript”, using `EM_JS()` or `EM_ASM()` (and related macros).

`EM_ASM`

This allows you to declare JavaScript in your C code “inline”. The JavaScript code is executed immediately and cannot be reused within the C/C++ file in which it is contained.

Arguments of type int or double can be passed into the JavaScript code block where they arrive as variables $0, $1, and so on. It can also return values back. You need to specify if the return value is an `int` or a `double` using the appropriate macro `EM_ASM_INT`or`EM_ASM_DOUBLE`.

```cpp
#include <emscripten/emscripten.h>

extern "C" {
  EMSCRIPTEN_KEEPALIVE int Sum(int a, int b) {
    int sum = a + b;
    return EM_ASM_INT({
      console.log($0);
      return $0;
    }, sum);
  }
}

```

`em++ -std=c++11 main.cc -O3 -s WASM=1 -o main.wasm -o main.js -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap"]'`

When compiled and run, Emscripten will execute the lines of JavaScript enclosed in the EM_ASM block as if they appeared directly in the generated code.

> Note, however, that under the hood Emscripten still does a function call even in this case, which has some amount of overhead.

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

The above example will actually end up logging the results of the`Sum`function twice, once through EM_ASM_INT() and the other time through our index.html.

`EM_JS`**(return_type, function_name, argument, code)**

If you want your JavaScript to be reusable in C++ as a function, you can use EM_JS instead which creates a wrapper for the JavaScript code and lets us execute it like a normal C/C++ function.

```cpp
#include <emscripten/emscripten.h>

  EM_JS(void, console_log_int, (int x), {
    console.log("Printing from C++:", x);
  });

extern "C" {

  EMSCRIPTEN_KEEPALIVE int Sum(int a, int b) {
    int sum = a + b;
    console_log_int(sum);
    return sum;
  }
}

```

You can read more about these macros [here](https://emscripten.org/docs/api_reference/emscripten.h.html).

You can also call JavaScript functions as function pointers from C as well as implement a C API in JavaScript where you can define the interface in C and implement the API in JavaScript.

You can also use [WebIDL Binder](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html#webidl-binder) and [Embind](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#embind) to create bindings between C++ and JavaScript, allowing C++ code entities to be used in a natural manner from JavaScript.*Embind*additionally supports calling JavaScript code from C++. However, today we will not be discussing them but you can always learn more about it on Emscripten’s website!
