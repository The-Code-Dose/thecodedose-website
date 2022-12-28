import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostLink from './postLink';
import Button from './button';
import './blogSection.scss';

export default () => {
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
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { draft: { eq: false }, featured: { eq: true } } }
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

  const posts = edges
    .filter((edge) => !!edge.node.frontmatter.date);

  const featuredPost = posts.shift();

  const LatestPosts = posts
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div className="blog-section">
      <div className="blog-section__heading">
        <h1>
          Read our blog
        </h1>
      </div>
      <div className="blog-section__container">
        <div className="blog-section__featured">
          <h2 className="blog-section__featured-title">
            {featuredPost.node.frontmatter.title}
          </h2>
          <img src={featuredPost.node.frontmatter.thumbnail} className="blog-section__featured-thumbnail" />
          <p>
            {featuredPost.node.excerpt}
          </p>
          <Button text="Read more" color="yellow" />
        </div>
        <div className="blog-section__list">
          {LatestPosts}
        </div>
      </div>
    </div>
  )
}