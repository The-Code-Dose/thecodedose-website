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
    <div className="bg-yellow w-full">
      <div className="px-10 py-3 sticky top-2 z-20">
        <header className="w-full flex justify-between items-center bg-purple px-10 py-3 rounded-full border drop-shadow-solid">
          <Link to="/">
            <img className="w-8" src={logo} alt="Logo" />
          </Link>
          <Navigation location={location} />
        </header>
      </div>
      {children}
      <footer className="bg-black flex flex-col md:flex-row justify-between gap-10 px-10 py-10">
        <div className="bg-purple p-10 rounded-2xl border border-black drop-shadow-solid flex flex-col gap-5 justify-between">
          <Link to="/">
            <img className="w-20" src={logo} alt="Logo" />
          </Link>
          <p className="text-white">
            Subscribe to receive latest updates right in your inbox!
          </p>
          <form className="flex flex-col lg:flex-row justify-between" onSubmit={handleSubmit}>
            <input className="border w-full lg:w-1/2 border-black drop-shadow-solid my-2 px-4 py-2 rounded-full" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
            <button
              className="bg-pink text-black uppercase my-2 px-4 py-2 rounded-full border border-black drop-shadow-solid hover:scale-105 transition-all"
              type="submit"
              disabled={subscribed}
            >
              {subscribed ? 'Subscribed' : 'Subscribe!'}
            </button>
          </form>
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
}
