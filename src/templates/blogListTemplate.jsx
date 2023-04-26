import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import './blogListTemplate.scss';

export default function BlogListTemplate({
  data: {
    site,
    blogPosts: { edges },
  },
}) {
  const path = window.location.pathname;
  const pageNumber = path.split('/').pop();
  const nextPage = pageNumber === 'blog' ? 2 : parseInt(pageNumber, 10) + 1;
  const previousPage = pageNumber === '2' ? '' : parseInt(pageNumber, 10) - 1;

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
        <h1>Blog</h1>
      </div>
      <div className="blog__posts">
        {Posts}
        {Posts.length === 0 && <h2>No more posts</h2>}
      </div>
      <div className="blog__pagination">
        {pageNumber !== 'blog' && <Link className="blog__pagination-link" to={`/blog${previousPage ? '/' + previousPage : ''}`}>Previous Page</Link>}
        {Posts.length > 0 && (
          <Link className="blog__pagination-link" to={`/blog/${nextPage}`}>Next Page</Link>
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    blogPosts: allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { eq: false }, travel: { ne: true } } }
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
