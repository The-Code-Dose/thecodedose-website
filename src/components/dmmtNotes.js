import React from 'react';
import Button from './button';
import notesImg from '../images/dmmt-notes.png';
import './dmmtNotes.scss';

export default () => (
  <section className="dmmt__container" id="dmmt-notes">
    <div className="dmmt__left">
      <img src={notesImg} />
    </div>
    <div className="dmmt__right">
      <div className="dmmt__heading-container">
        <h1 className="dmmt__heading">
          Are you a web developer / designer?
        </h1>
      </div>
      <div className="dmmt__content-container">
        <p className="dmmt__content">
          <i>Don't Make Me Think: A Common Sense Approach to Web Usability</i>, authored by Steve Krug, is a book that provides insight into how usability and user experience can be improved on the web.<br></br>

          This book is an invaluable guide for web designers and developers. But if you don't want to read the entire book, you can download these chapter-wise notes and summary of the book that can be read easily within an hour!
        </p>
        <Button text="Free Download" variant="pink" link to="https://thecodedose.gumroad.com/l/notes-dmmt" />
      </div>
    </div>

  </section>
);
