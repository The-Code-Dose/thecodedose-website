import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import './blogTemplate.scss';

export default function BlogTemplate({
  data,
}) {
  const {
    site, markdownRemark, blogPosts: { edges }, featuredPosts: { edges: featuredPosts },
  } = data;
  const { siteMetadata: { title: siteTitle } } = site;
  const {
    frontmatter: {
      title: blogTitle,
      metaDescription: blogMetaDescription,
      thumbnail,
      date,
      path,
    }, html,
  } = markdownRemark;

  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const FeaturedPosts = featuredPosts
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);


  return (
    <Layout>
      <Helmet>
        <title>
          {`${blogTitle} | ${siteTitle}`}
        </title>
        <meta name="description" content={blogMetaDescription} />
        <meta name="twitter:site" content="@thecodedose" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://thecodedose.com${path}`} />
        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogMetaDescription} />
        <meta property="og:image" content={thumbnail} />
      </Helmet>
      <div className="blog-post-container">
        <h1 className="blog-post__title">{blogTitle}</h1>
        <article className="blog-post__content">
          <div>
              <div className="blog-post__date">{date}</div>
              <img className="blog-post__thumbnail" src={thumbnail} />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="blog-post__table">
            <h3 className="blog-post__table-title">Table of Contents</h3>
          </div>
        </article>
        <section className="blog-post__related-articles">
          <h2 className="blog-post__related-articles__heading">Related Articles</h2>
          <div className="grids">{Posts}</div>
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
    blogPosts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
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
    featuredPosts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { featured: { eq: true } } }
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
