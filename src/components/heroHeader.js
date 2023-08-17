import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import hero from '../images/hero_image.png';
import Button from './button';

import './heroHeader.scss';

export default function () {
  return (
    <StaticQuery
      query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
      render={(data) => (
        <div className="hero-header">
          <div className="hero-header__left">
            <img src={hero} />
          </div>
          <div
            className="hero-header__right"
          >
            <h1 className="hero-header__heading">
              Want to learn to <span className="hero-header__heading--focus">code</span>?
            </h1>
            <p className="hero-header__content">
              Do you want to learn about computer programming but don't know where to start? This beginner's guide will help you find the best resources to start coding today.
            </p>
            <Button text="Start here" color="yellow" link to="/blog/how-to-learn-coding" />
          </div>
        </div>
      )}
    />
  );
}
