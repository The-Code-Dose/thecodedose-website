import React from 'react';
import Button from './button';
import Video from '../images/youtube.mp4';
import './youtube.scss';

export default () => (
  <div className="youtube__container" id="youtube">
    <div className="youtube__left">
      <h2 className="youtube__heading">
        Check us out on YouTube
      </h2>
      <p className="youtube__content">
        Understand computer science concepts with hand-drawn animations.
      </p>
      <Button text="Open YouTube" variant="black" to="https://www.youtube.com/channel/UC74LLw9u0wG4arsn8wYpC7w" link />
    </div>
    <div className="youtube__right">
      <video autoPlay muted loop className="youtube__video">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  </div>
);
