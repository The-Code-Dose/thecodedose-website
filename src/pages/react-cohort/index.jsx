import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

function ReactCohortPage({ data: { site } }) {
  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta
          http-equiv="refresh"
          content="0; url=https://products.thecodedose.com/the-frontend-pill"
        />
      </Helmet>
      <div className="w-screen h-screen flex justify-center items-center">
        Redirecting...
      </div>
    </div>
  );
}

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

// b
