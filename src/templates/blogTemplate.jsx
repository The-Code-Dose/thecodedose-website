import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/postLink";
import SocialShare from "../components/socialShare";
import withPadding from "../hocs/withPadding";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WrappedArticle = withPadding(({ html }) => (
  <article className="flex flex-col items-center my-10 rounded-2xl">
    <div className="w-full md:w-3/4 break-words">
      <div className="break-words" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </article>
));

const WrappedTableOfContents = ({
  html,
  isTableOfContentsOpen,
  setTableOfContentsOpen,
}) => (
  <section className="flex flex-col gap-2 bg-blue p-3 mt-10 items-center rounded-2xl border border-black rounded-2xl drop-shadow-solid">
    <div
      className="flex justify-center items-center gap-2 sm:gap-4 w-full"
      onClick={() => setTableOfContentsOpen((prev) => !prev)}
    >
      <h2 className="text-xl sm:text-2xl m-0">Table Of Contents</h2>
      <p>
        {isTableOfContentsOpen ? (
          <ChevronUpIcon className="h-6 2-6"></ChevronUpIcon>
        ) : (
          <ChevronDownIcon className="h-6 w-6"></ChevronDownIcon>
        )}
      </p>
    </div>
    <AnimatePresence>
      {isTableOfContentsOpen && (
        <motion.div
          className="text-sm sm:text-lg w-full md:w-3/4 break-words flex justify-center px-4"
          dangerouslySetInnerHTML={{ __html: html }}
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
            transition: {
              height: {
                duration: 0.5,
                delay: 0.2,
              },
              opacity: {
                duration: 0.2,
                delay: 0.5,
              },
            },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: {
              height: {
                duration: 0.5,
                delay: 0.2,
              },
              opacity: {
                duration: 0.2,
              },
            },
          }}
        ></motion.div>
      )}
    </AnimatePresence>
  </section>
);

export default function BlogTemplate({ data }) {
  const {
    site,
    markdownRemark,
    blogPosts: { edges },
  } = data;
  const {
    siteMetadata: { title: siteTitle },
  } = site;
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
    .map((edge) => (
      <PostLink
        key={edge.node.id}
        post={edge.node}
        showExcerpt
        direction="column"
      />
    ));
  const [isTableOfContentsOpen, setTableOfContentsOpen] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>{`${blogTitle} | ${siteTitle}`}</title>
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
      <div className="px-5 py-8 md:px-10 md:py-24 2xl:px-5 mt-24">
        <div className="flex flex-col items-center pt-3 break-words bg-yellow p-10 border border-black rounded-2xl drop-shadow-solid">
          <h1 className="text-3xl md:text-5xl text-center">{blogTitle}</h1>
          <div>
            <span className="text-xs">{date} • </span>
            <span className="text-xs">{author} • </span>
            <span className="text-xs">{timeToRead} min read</span>
          </div>
          <div>
            {tags.map((tag) => (
              <Link
                className="text-xs rounded-2xl border border-black border-solid py-2 px-2.5 my-1.5 mx-2 inline-block bg-white capitalize"
                to={`/tags/${tag}`}
              >
                {tag}
              </Link>
            ))}
          </div>
          <SocialShare title={blogTitle} />
        </div>
        <WrappedTableOfContents
          html={tableOfContents}
          isTableOfContentsOpen={isTableOfContentsOpen}
          setTableOfContentsOpen={setTableOfContentsOpen}
        />
        <WrappedArticle html={html} />
        <SocialShare title={blogTitle} />
        <section className="bg-pink text-white p-10 border border-black rounded-2xl drop-shadow-solid mt-24 mb-10">
          <h2 className="text-5xl md:text-6xl text-center text-outline">
            Recent Articles
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10">
            {Posts}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($pagePath: String!) {
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
      limit: 4
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { draft: { eq: false }, template: { eq: "BlogPost" } }
      }
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
