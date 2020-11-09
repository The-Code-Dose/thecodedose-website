import React from 'react';
import { Link } from 'gatsby';
import ThemeChanger from './themeChanger';

export default () => (
  <nav className="navigation">
    <Link to="/contact" className="button -primary">
      Contact
    </Link>
    <Link to="/">
      Home
    </Link>
    <Link to="/blog">
      Blog
    </Link>
    <a
      href="https://www.redbubble.com/people/thecodedose/shop"
      target="__blank"
    >
      Store
    </a>
    <ThemeChanger />
  </nav>
);
