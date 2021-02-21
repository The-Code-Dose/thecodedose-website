import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import SocialLinks from '../components/socialLinks';
import Avatar from '../images/avatar.jpg';

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
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
        <article className="post">
          <div>
            <div className="post-thumbnail">
              <h1 className="post-title">{blogTitle}</h1>
              <div className="post-meta">{date}</div>
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3>About</h3>
            <img alt="author" className="about__image" src={Avatar} />
            <p>Hey! I am Urvashi. I am a software engineer at HackerRank.</p>
            <h4>Follow Me</h4>
            <SocialLinks />
            <div className="section__header">
              <h2>Featured &darr;</h2>
            </div>
            <div style={{ display: 'grid', rowGap: '25px' }}>{FeaturedPosts}</div>
          </div>
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
