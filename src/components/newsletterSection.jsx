import React, { useState } from 'react';
import withPadding from '../hocs/withPadding';

function NewsletterSection() {
  const [newsletterDetails, setNewsletterDetails] = useState({});
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(newsletterDetails.email, {
      FNAME: newsletterDetails.firstName,
      LNAME: newsletterDetails.lastName,
    })
      .then(() => {
        setSubscribed(true);
        alert('Successfully subscribed!');
      })
      .catch(() => {
        alert('Uh Oh! Something went wrong');
      });
  };

  return (
    <section className="flex justify-center">
      <form className="w-full md:w-3/4 lg:w-1/2 p-10 border border-black rounded-2xl drop-shadow-solid bg-blue flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-4xl mb-5">Subscribe to get access to exclusive coding tutorials, tips, and tricks!</h1>
        <label className="flex justify-between items-center">
          First Name:
          <input
            className="w-3/4 border border-black drop-shadow-solid my-2 px-4 py-2 rounded-full"
            type="text"
            value={newsletterDetails.firstName}
            onChange={(e) => setNewsletterDetails({
              ...newsletterDetails,
              firstName: e.target.value,
            })}
          />
        </label>
        <label className="flex justify-between items-center">
          Last Name:
          <input
            className="w-3/4 border border-black drop-shadow-solid my-2 px-4 py-2 rounded-full"
            type="text"
            value={newsletterDetails.lastName}
            onChange={(e) => setNewsletterDetails({
              ...newsletterDetails,
              lastName: e.target.value,
            })}
          />
        </label>
        <label className="flex justify-between items-center">
          Email:
          <input
            className="w-3/4 border border-black drop-shadow-solid my-2 px-4 py-2 rounded-full"
            type="text"
            value={newsletterDetails.email}
            required
            onChange={(e) => setNewsletterDetails({
              ...newsletterDetails,
              email: e.target.value,
            })}
          />
        </label>
        <button
          className="bg-pink text-black uppercase py-4 my-5 rounded-full border border-black drop-shadow-solid hover:scale-105 transition-all"
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? 'Subscribed' : 'Subscribe!'}
        </button>
      </form>
    </section>
  )
}

export default withPadding(NewsletterSection, 'newsletter', 'bg-yellow');
