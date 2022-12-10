import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import HeroHeader from '../components/heroHeader';
import Store from '../components/store';

const IndexPage = ({
  data: {
    site,
    latestBlogPosts: { edges },
    reactBlogPosts: { edges: reactPosts },
    selfHelpBlogPosts: { edges: selfHelpPosts },
  },
}) => {
  const LatestPosts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const ReactPosts = reactPosts
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const SelfHelpPosts = selfHelpPosts
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <div className="section__header">
        <h2>Self Help &darr;</h2>
        <Link to="/blog">View All</Link>
      </div>
      <div className="grids">{SelfHelpPosts}</div>
      <div className="section__header">
        <h2>Programming - React &darr;</h2>
        <Link to="/blog">View All</Link>
      </div>
      <div className="grids">{ReactPosts}</div>
      <Store />
      <div className="section__header">
        <h2>Latest Blogs &darr;</h2>
        <Link to="/blog">View All</Link>
      </div>
      <div className="grids">{LatestPosts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    latestBlogPosts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: false } }
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
    reactBlogPosts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: ["react"] }, draft: false } }
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
    selfHelpBlogPosts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: ["self help"] }, draft: false } }
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
