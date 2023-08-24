import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';

import './tagTemplate.scss';

export default function TagTemplate({ pageContext, data, location }) {
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
    <Layout location={location}>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" />
      </Helmet>
      <div className="tagpage__container">
        <div className="tagpage__title">
          <h1>{tag}</h1>
          <span className="tagpage__subheading">{tagHeader} &darr;</span>
        </div>
        <div className="tagpage__posts">{Posts}</div>

        <section>
          <div className="tagpage__all-tags">
            <h1 className="">All Tags</h1>
          </div>
          <div className="tagpage__tags-container">
            {tags.map(({ tag: tagName }) => (
              <Link to={`/tags/${tagName}`} className="post__tag">
                {tagName}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    tagsGroup: allMarkdownRemark {
      group(field: { frontmatter: { tags: SELECT } }) {
        tag: fieldValue
      }
    }
    blogPosts: allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
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
