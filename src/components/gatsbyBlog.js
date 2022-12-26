import React from 'react';
import Button from './button';
import './gatsbyBlog.scss';

export default () => (
  <div className="gatsby-blog__container">
    <div className="gatsby-blog__left">
      <h2 className="gatsby-blog__heading">
        Setup your blog using Gatsby in under an hour: A Beginner’s Guide
      </h2>
      <p className="gatsby-blog__content">
        If you want to setup a blog and don't have any idea where to start, this is the guide for you.
      </p>
      <p className="gatsby-blog__content">
      It doesn't matter if you're brand new to Gatsby or have previous experiences with static site generators. By the end of this guide, you can have your own blog that looks like this.
      </p>
      <Button text="View More" variant="black" link to="/blog/the-beginners-guide-to-setting-up-a-gatsby-blog-in-under-an-hour" />
    </div>
    <div className="gatsby-blog__right" />
  </div>
);
