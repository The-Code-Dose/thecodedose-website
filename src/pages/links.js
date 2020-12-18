/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import './links.scss';

const LinksPage = ({ data: { site: { siteMetadata: { title, description, links }} } }) => (
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
      <h1>Links</h1>
      <div className="links-tree">
        {links.map(({ name, href }) => (
          <a href={href} className="links-tree__link">{name}</a>
        ))}
      </div>
    </div>
  </Layout>
);
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
