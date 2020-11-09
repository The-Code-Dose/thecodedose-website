import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark, blogPosts: { edges } } = data;
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
        <article className="post">
          {!thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{blogTitle}</h1>
              <div className="post-meta">{date}</div>
            </div>
          )}
          {!!thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${thumbnail})` }}
            >
              <h1 className="post-title">{blogTitle}</h1>
              <div className="post-meta">{date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <div className="divider" />
        <section className="mt-100">
          <h2>Read More &darr;</h2>
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
  }
`;
