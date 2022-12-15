import React from 'react';
import Button from './button';
import './dsaRevisionNotes.scss';

export default () => (
  <section className="dsa-revision__container">
    <div className="dsa-revision__left">
      <div className="dsa-revision__heading-container">
        <h1 className="dsa-revision__heading">
          Data Structures & Algorithms Revision Notes
        </h1>
      </div>
      <div className="dsa-revision__content-container">
        <p className="dsa-revision__content">
          These are the notes that I made back in University when I was studying Data Structures and Algorithms for interviewing.
          These are not meant to be used as learning material but as revision notes.
          Please note that, there might be errors in the notes because they were not made with the intention of distribution but I have put them up here because I thought someone might find them useful!
        </p>
        <Button text="Download for free" variant="pink" />
      </div>
    </div>
    <div className="dsa-revision__right" />
  </section>
);
