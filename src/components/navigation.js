import React from 'react';
import { Link } from 'gatsby';
import ThemeChanger from './themeChanger';

import './navigation.scss';

export default () => (
  <nav className="navigation">
    <a href="mailto:thecodedoseofficial@gmail.com" className="button -primary navigation__cta">
      Contact
    </a>
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
