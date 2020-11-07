import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SocialLinks from './socialLinks';

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
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <SocialLinks />
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
      </div>
    )}
  />
);
