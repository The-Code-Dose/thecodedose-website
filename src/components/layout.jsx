import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';
import SocialLinks from './socialLinks';
import Navigation from './navigation';
import './layout.scss';
import logo from '../images/logo.png';

export default function ({ children }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then(() => {
        setSubscribed(true);
        alert('Successfully subscribed!');
      })
      .catch(() => {
        alert('Uh Oh! Something went wrong');
      });
  };

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
          <form className="site-footer__form" onSubmit={handleSubmit}>
            <input className="site-footer__input" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
            <input className="button button--yellow" type="submit" value={subscribed ? 'Subscribed' : 'Subscribe!'} disabled={subscribed} />
          </form>
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
}
