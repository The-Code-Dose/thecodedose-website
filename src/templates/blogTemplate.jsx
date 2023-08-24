import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import './blogTemplate.scss';

export default function BlogTemplate({
  data,
  location,
}) {
  const {
    site, markdownRemark, blogPosts: { edges },
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
      tags,
    },
    html,
    tableOfContents,
    timeToRead,
  } = markdownRemark;

  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout location={location}>
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
      <div className="bg-yellow px-5 py-8 md:px-10 md:py-24 2xl:px- 5">
        <div className="flex flex-col items-center pt-3 break-words">
          <h1 className="text-5xl text-center">{blogTitle}</h1>
          <div>
            <span className="blog-post__date">{date} • </span>
            <span className="blog-post__author">{author} • </span>
            <span className="blog-post__read">{timeToRead} min read</span>
          </div>
          <div className="blog-post__tags-container">
            {tags.map(tag => (
              <Link className="blog-post__tag" to={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <article className="px-8 lg:px-10 py-16 flex flex-col items-center my-10 bg-white border border-black rounded-2xl drop-shadow-solid">
          <div className="w-full md:w-3/4 break-words">
            <img className="border border-black rounded-2xl drop-shadow-solid my-5" src={thumbnail} alt="thumbnail" />
            <div
              className="break-words"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </article>
        <section className="bg-pink text-white p-10 border border-black rounded-2xl drop-shadow-solid mb-10">
          <h2 className="text-5xl md:text-6xl text-center text-outline">Recent Articles</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10">{Posts}</div>
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($pagePath: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
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
    blogPosts: allMarkdownRemark(
      limit: 3
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { eq: false } } }
      ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
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
