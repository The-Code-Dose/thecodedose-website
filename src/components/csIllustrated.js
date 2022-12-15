import React from 'react';
import Button from './button';
import './csIllustrated.scss';
import thumbnail from '../images/featured_blog_thumbnail.png';

export default () => (
  <div className="cs-illustrated__container">
    <div className="cs-illustrated__left">
      <img className="cs-illustrated__img" src={thumbnail} />
    </div>
    <div className="cs-illustrated__right">
      <h1 className="cs-illustrated__heading">
        Computer Science <span className="cs-illustrated__heading--pink">Illustrated</span>
      </h1>
      <p className="cs-illustrated__content">
        This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
      </p>
      <Button text="View More" color="yellow" />
    </div>
  </div>
);
