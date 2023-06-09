import React from 'react';

import { graphql } from 'gatsby';

import './study-plans.scss';

const ReactCohortPage = ({
  data: {
    site,
  },
}) => (<></>)

export default ReactCohortPage;

export const pageQuery = graphql`
  query reactCohortPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
