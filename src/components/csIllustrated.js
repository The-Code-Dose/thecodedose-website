import React from 'react';
import Button from './button';
import './csIllustrated.scss';
import thumbnail from '../images/cs-illustrated.jpg';

export default () => (
  <div className="cs-illustrated__container" id="cs-illustrated">
    <div className="cs-illustrated__left">
      <img className="cs-illustrated__img" src={thumbnail} />
    </div>
    <div className="cs-illustrated__right">
      <h1 className="cs-illustrated__heading">
        Computer Science <span className="cs-illustrated__heading--pink">Illustrated</span>
      </h1>
      <p className="cs-illustrated__content">
        Check out our collection of computer science concepts explained using illustrations.
      </p>
      <Button text="View More" color="yellow" link to="/cs-illustrated" />
    </div>
  </div>
);
