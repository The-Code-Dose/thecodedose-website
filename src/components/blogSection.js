import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostLink from './postLink';
import Button from './button';
import './blogSection.scss';
import thumbnail from '../images/featured_blog_thumbnail.png';

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
          limit: 3
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { draft: { eq: false } } }
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
  } = data

  const LatestPosts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div className="blog-section">
      <div className="blog-section__heading">
        <h1>
          Check out our blog
        </h1>
      </div>
      <div className="blog-section__container">
        <div className="blog-section__featured">
          <h2 className="blog-section__featured-title">
            How to teach yourself to code
          </h2>
          <img src={thumbnail} className="blog-section__featured-thumbnail" />
          <p>
            Curabitur vel magna ullamcorper, volutpat est vitae, viverra turpis. Etiam suscipit pulvinar enim et pulvinar. Nunc aliquam elit odio, et elementum quam scelerisque id. Integer semper elit luctus quam tristique, vel volutpat nisl rhoncus. Proin leo erat, cursus in odio at, lacinia ultricies mauris.
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