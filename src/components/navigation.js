import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <nav className="site-header__navigation">
    <Link to="/">
      Home
    </Link>
    <Link to="/blog">
      Blog
    </Link>
    <Link to="/cs-illustrated">
      CS Illustrated
    </Link>
    <a
      href="https://www.redbubble.com/people/thecodedose/shop"
      target="__blank"
    >
      Shop
    </a>
  </nav>
);
