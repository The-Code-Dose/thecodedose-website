import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { request } from "graphql-request";
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import './blogTemplate.scss';

export default function BlogTemplate({
  data,
}) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  const {
    site, markdownRemark,
  } = data;
  const { siteMetadata: { title: siteTitle } } = site;
  const {
    frontmatter: {
      title: blogTitle,
      metaDescription: blogMetaDescription,
      thumbnail,
      date,
      author,
      path,
      travel,
      tags,
    },
    html,
    tableOfContents,
    timeToRead,
  } = markdownRemark;

  const fetchRelatedPosts = async () => {
    const query = `query($tags: [String!]) {
        blogPosts: allMarkdownRemark(
          limit: 3
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              draft: { eq: false }
              tags: {
                in: $tags
              }
            }
          }
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

    const result = await request(
      window.location.origin + "/__graphql",
      query,
      { tags },
    );

    return result.blogPosts.edges;
  };

  useEffect(() => {
    fetchRelatedPosts().then((data) => setRelatedPosts(data));
  }, [tags]);

  console.log(relatedPosts)

  const Posts = relatedPosts
    ?.filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>
          {`${blogTitle} | ${siteTitle}`}
        </title>
        <meta name="description" content={blogMetaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://thecodedose.com${path}`} />
        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogMetaDescription} />
        <meta property="og:image" content={thumbnail} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@thecodedose" />
        <meta name="twitter:title" content={blogTitle} />
        <meta name="twitter:description" content={blogMetaDescription} />
        <meta name="twitter:image" content={thumbnail} />
      </Helmet>
      <div className="blog-post__container">
        <div className="blog-post__title">
          <h1>{blogTitle}</h1>
          <span className="blog-post__date">{date} • </span>
          <span className="blog-post__author">{author} • </span>
          <span className="blog-post__read">{timeToRead} min read</span>
          <div className="blog-post__tags-container">
            {tags.map(tag => (
              <Link to={`/tags/${tag}`} className="post__tag">
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <article className="blog-post__section">
          <div  className="blog-post__left">
            <img className="blog-post__thumbnail" src={thumbnail} />
            <div
              className="blog-post__content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="blog-post__table">
            <h3 className="blog-post__table-title">Table of Contents</h3>
            <section
              className="blog-post__table-list"
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          </div>
        </article>
        <section className="blog-post__related-articles">
          <h2 className="blog-post__related-articles__heading">Related Articles</h2>
          <div className="blog-post__related-articles--list">{Posts}</div>
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
      tableOfContents(pathToSlugField: "frontmatter.path")
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        thumbnail
        metaDescription
        tags
      }
      timeToRead
    }
  }
`;
