import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';
import SocialLinks from './socialLinks';
import Navigation from './navigation';
import './layout.scss';
import logo from '../images/logo.png';

export default function ({ children, location }) {
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
    <div className="bg-yellow px-10 py-3 w-full">
      <header className="w-full flex justify-between items-center bg-purple px-10 py-3 rounded-full border drop-shadow-solid sticky top-5 z-10">
        <Link to="/">
          <img className="site-header__logo" src={logo} alt="Logo" />
        </Link>
        <Navigation location={location} />
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
