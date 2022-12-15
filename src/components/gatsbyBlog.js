import React from 'react';
import Button from './button';
import './gatsbyBlog.scss';

export default () => (
  <div className="gatsby-blog__container">
    <div className="gatsby-blog__left">
      <h2 className="gatsby-blog__heading">
        Setup your Gatsby Blog in under an hour: The Beginner’s Guide
      </h2>
      <p className="gatsby-blog__content">
        This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
      </p>
      <p className="gatsby-blog__content">
        This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
      </p>
      <Button text="Start Now" variant="black" />
    </div>
    <div className="gatsby-blog__right" />
  </div>
);
