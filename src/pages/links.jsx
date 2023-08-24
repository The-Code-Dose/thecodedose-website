/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import './links.scss';

function LinksPage({ data: { site: { siteMetadata: { title, description, links } } } }) {
  return (
    <Layout>
      <Helmet>
        <title>
          Links —
          {title}
        </title>
        <meta
          name="description"
          content={`Contact page of ${description}`}
        />
      </Helmet>
      <div>
        <div className="links__container">
          {links.map(({ name, href }) => (
            <a href={href} className="links__link">{name}</a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default LinksPage;
export const pageQuery = graphql`
  query LinksPageQuery {
    site {
      siteMetadata {
        title
        description
        links {
          name
          href
        }
      }
    }
  }
`;
