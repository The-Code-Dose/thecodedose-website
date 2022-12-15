import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SocialLinks from './socialLinks';
import Navigation from './navigation';
import 'prismjs/themes/prism-okaidia.css';
import './layout.scss';
import logo from '../images/logo.png';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">
            <img className="site-header__logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <div className="site-footer__left">
          <Link to="/">
            <img className="site-footer__logo" src={logo} alt="Logo" />
          </Link>
          <h4>
            Subscribe to receive latest updates right in your inbox!
          </h4>
          <input className="site-footer__input" placeholder="Email Address" />
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
};
