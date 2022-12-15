import React from 'react';
import Button from './button';
import Video from '../images/youtube.mp4';
import './youtube.scss';

export default () => (
  <div className="youtube__container">
    <div className="youtube__left">
      <h2 className="youtube__heading">
        Check us out on YouTube
      </h2>
      <p className="youtube__content">
        This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
      </p>
      <Button text="Watch Now" variant="black" />
    </div>
    <div className="youtube__right">
      <video autoPlay muted loop className="youtube__video">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  </div>
);
