import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import withPadding from '../hocs/withPadding';
import PostLink from './postLink';

function BlogSection() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        latestBlogPosts: allMarkdownRemark(
          limit: 4
          sort: { frontmatter: { date: DESC } }
          filter: {
            frontmatter: { draft: { eq: false }, template: { eq: "BlogPost" } }
          }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 80)
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
    `,
  );

  const {
    latestBlogPosts: { edges },
  } = data;

  const posts = edges;

  const LatestPosts = posts.map((edge) => (
    <PostLink key={edge.node.id} post={edge.node} />
  ));

  return (
    <>
      <h1 className="uppercase text-5xl md:text-7xl text-center text-white text-outline">latest articles</h1>
      <div className="gap-5 mt-20 grid md:grid-cols-2 lg:grid-cols-4 2xl:gap-20">
        {LatestPosts}
      </div>
    </>
  );
}

export default withPadding(BlogSection, 'blog', 'bg-blue');
