import React, { useState } from 'react';
import { Link } from 'gatsby';

export default () => {
  const [openMenu, setOpenMenu] = useState(false);

  return(
    <>
    <nav className="site-header__navigation--desktop">
      <Link to="/">
        Home
      </Link>
      <Link to="/blog">
        Blog
      </Link>
      <Link to="/travel">
        Travel
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
    <div className="site-header__navigation--menu-icon" onClick={() => setOpenMenu(!openMenu)}>Menu</div>
    <nav className="site-header__navigation--mobile">
      {openMenu && (
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/blog">
            Blog
          </Link>
          <Link to="/travel">
            Travel
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
        </div>
      )}
    </nav>
    </>
  )}
