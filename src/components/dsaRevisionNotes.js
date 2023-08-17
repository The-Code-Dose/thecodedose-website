import React from 'react';
import Button from './button';
import './dsaRevisionNotes.scss';

export default function () {
  return (
    <section className="dsa-revision__container" id="dsa-notes">
      <div className="dsa-revision__left">
        <div className="dsa-revision__heading-container">
          <h1 className="dsa-revision__heading">
            Data Structures & Algorithms Revision Notes
          </h1>
        </div>
        <div className="dsa-revision__content-container">
          <p className="dsa-revision__content">
            This free e-book contains notes and references on common algorithms and data structures used in programming interviews. These are not meant to be used as learning material, but as revision notes.
          </p>
          <Button text="Free Download" variant="pink" link to="https://thecodedose.gumroad.com/l/DSA-revision-notes" />
        </div>
      </div>
      <div className="dsa-revision__right" />
    </section>
  );
}
