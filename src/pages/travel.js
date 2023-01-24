import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import './blog.scss';

const TravelPage = ({
  data: {
    site,
    blogPosts: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="blog__title">
        <h1>The Travel Dose</h1>
      </div>
      <div className="blog__posts">{Posts}</div>
    </Layout>
  );
};

export default TravelPage;
export const pageQuery = graphql`
  query travelPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: false }, travel: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            tags
          }
        }
      }
    }
  }
`;
