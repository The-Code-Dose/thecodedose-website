import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/postLink";

export default function TagTemplate({ pageContext, data }) {
  const { site, blogPosts, tagsGroup } = data;
  const { tag } = pageContext;

  const { edges, totalCount } = blogPosts;
  const { group: tags } = tagsGroup;
  const { siteMetadata } = site;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => (
      <PostLink key={edge.node.id} post={edge.node} direction="column" />
    ));

  return (
    <Layout>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" />
      </Helmet>
      <div className="">
        <div className="bg-pink border-b border-black text-center px-5 py-10">
          <h1 className="capitalize text-5xl font-extrabold p-4">{tag}</h1>
          <span className="text-sm"> {tagHeader} &darr;</span>
        </div>
        <div className="px-5 py-14 md:px-10 md:py-24 2xl:px-5">
          <div className="gap-5 mt-20 grid md:grid-cols-2 lg:grid-cols-4 2xl:gap-20">
            {Posts}
          </div>
        </div>
        <section>
          <div className="bg-blue py-10 text-center border-b border-t border-black">
            <h1 className="text-5xl font-bold">All Tags</h1>
          </div>
          <div className="p-14 md:px-10 md:py-24">
            {tags.map(({ tag: tagName }) => (
              <Link
                to={`/tags/${tagName}`}
                className="text-xs border border-black py-2 px-3 mx-2 my-1 inline-block bg-yellow rounded-full capitalize"
              >
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
