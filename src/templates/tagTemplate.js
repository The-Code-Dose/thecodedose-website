import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';

export default function TagTemplate({
  pageContext,
  data,
}) {
  const { site, blogPosts, tagsGroup } = data;
  const { tag } = pageContext;

  const { edges, totalCount } = blogPosts;
  const { group: tags } = tagsGroup;
  const { siteMetadata } = site;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>
          {siteMetadata.title}
        </title>
        <meta name="description" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5235026168912267" crossOrigin="anonymous" />
      </Helmet>
      <div className="blog-post-container">
        <div>
          <h2>{tagHeader} &darr;</h2>
          <div className="grids">{Posts}</div>
          <h2 className="all-tags">All Tags &darr;</h2>
          <div className="post__tags tags-container">
            {tags.map(({ tag: tagName }) => (
              <Link to={`/tags/${tagName}`} className="post__tag">{tagName}</Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    tagsGroup: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
    blogPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
