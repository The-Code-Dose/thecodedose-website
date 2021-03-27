import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SocialLinks from './socialLinks';
import Navigation from './navigation';
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <section className="mt-100">
        <h2>Subscribe to my Newsletter &darr;</h2>
        <iframe
          title="newsletter"
          className="card"
          src="https://thecodedose.substack.com/embed"
          height="320"
          style={{ width: '100%' }}
          frameBorder="0"
          scrolling="no"
        />
      </section>
      <footer className="site-footer">
        <SocialLinks />
        <p>
          &copy;
          {new Date().getFullYear()}
          &bull; Crafted with
          <span role="img" aria-label="love">
            {' '}
            ❤️
            {' '}
          </span>
          by The Code Dose
        </p>
      </footer>
    </div>
  );
};
