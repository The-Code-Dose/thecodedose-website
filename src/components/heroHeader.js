import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import hero from "../images/coding-baby-tshirt.jpg";
import Button from './button';

import './heroHeader.scss';

export default () => (
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
            Not sure where to <span className="hero-header__heading--focus">start</span>?
          </h1>
          <p className="hero-header__content">
            This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
          </p>
          <Button text="Start here" color="yellow" />
        </div>
      </div>
    )}
  />
);
