import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import './socialLinks.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            social {
              instagram
              twitter
              redbubble
              github
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          social: {
            instagram, redbubble, twitter, github,
          },
        },
      },
    }) => (
      <div className="site-footer__right">
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/blog">
            Blog
          </Link>
          <Link to="/cs-illustrated">
            CS Illustrated
          </Link>
          <a href={redbubble} target="__blank">
            Shop
          </a>
        </div>
        <div>
          <a href={instagram} target="__blank">
            Instagram
          </a>
          <a href={github} target="__blank">
            Discord
          </a>
          <a href={twitter} target="__blank">
            Twitter
          </a>
          <a href={twitter} target="__blank">
            YouTube
          </a>
          <a href={github} target="__blank">
            Github
          </a>
        </div>
      </div>
    )}
  />
);
