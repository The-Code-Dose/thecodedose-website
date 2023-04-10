---
template: BlogPost
path: /blog/create-a-link-tree-in-react
date: 2023-04-05T19:37:42.146Z
title: How To Create A Link Tree In React
tags:
  - react
  - beginner
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/linktree_cover.jpeg
---

Have you clicked on a link in the Instagram bios of some people and landed on a page that just displays a collection of other links?
This is called a link tree.
As a website owner, you might want to create a centralized hub where visitors can easily access all of your important links.
One popular solution to this problem is to create a "link tree," which is essentially a page that lists all of your important links in one place.
It's useful for sharing multiple resources or links using a single link since Instagram only allows you to add one link in your profiles.

Though there are many apps available to you like [Linktree](https://linktr.ee/) that helps you build a link tree, they are free to get started but you need to pay for customizing the look and feel as well as to view the analytics.

Fortunately, if you have your own website, building a link tree yourself is quite easy.
In this blog post, we will go through the steps of creating a link tree for your website using React.

# Adding a `/links` route

Create a new component `LinkTree`:

```js
// LinkTree.js
export default function LinkTree() {
  return (
    <div className="App">
      <h1>My Link Tree</h1>
    </div>
  );
}
```

Add a new route for `/links` in your router and render `LinkTree` when the user visits this route:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LinkTree from "./LinkTree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },
  // add a new route for /links
  {
    path: "/links",
    element: <LinkTree />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

# Adding links to the tree

Create an array of links that will be listed in your links tree.
Each link can be described as an object containing the `name` (title that appears in the UI) and the `href` (URL where the user will end up on clicking this link).

```js
// LinkTree.js
export default function LinkTree() {
  const links = [
    {
      name: "Data Structures & Algorithms Study Plan on Notion",
      href: "https://tagmango.app/08643ca029"
    },
    {
      name: "Buy My Setup on Amazon ",
      href: "https://www.amazon.in/shop/thecodedose"
    },
    // add your own links like this...
  ];

  return (
    <div className="App">
      <h1>My Link Tree</h1>
    </div>
  );
}
```

# Render links

Now that you have the links, it's time to render the links on the link tree page.
Each link from the array is mapped to an `<a>` element.

```js
// LinkTree.js
export default function LinkTree() {
  const links = [
    {
      name: "Data Structures & Algorithms Study Plan on Notion",
      href: "https://tagmango.app/08643ca029"
    },
    {
      name: "Buy My Setup on Amazon ",
      href: "https://www.amazon.in/shop/thecodedose"
    },
    // add your own links like this...
  ];

  return (
    <div className="App">
      <h1>My Link Tree</h1>
      {/* each link object is rendered as an anchor tag */ }
      {links.map(({ name, href }) => (
        <a href={href} className="link">
          {name}
        </a>
      ))}
    </div>
  );
}
```

# Adding styles

Create a `css` file and add styles:

```css
.App {
  font-family: sans-serif;
  text-align: center;
}

.link {
  display: block;
  padding: 20px 10px;
  margin: 10px;
  background-color: pink;
  border-radius: 50px;
  border: 1px solid black;
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.link:hover {
  background-color: palevioletred;
}
```

Don't forget to import this stylesheet in `LinkTree.js`.
Here's how the completed result would look like:

![Link Tree](/assets/linktree.png)

You can view the demo of this code on CodePen.

<iframe src="https://codesandbox.io/embed/sleepy-payne-ju981h?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="sleepy-payne-ju981h"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
