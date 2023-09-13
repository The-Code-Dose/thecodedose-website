import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import BlogSection from "../components/blogSection";
import PostLink from "../components/postLink";

function BlogPage({ data: { site, blogPosts } }) {
  const sortedPosts = blogPosts.group.sort(
    (a, b) => b.totalCount - a.totalCount
  );
  const groupedPosts = sortedPosts.slice(0, 5);
  const restPosts = sortedPosts
    .slice(5)
    .reduce((arr, items) => arr.concat(items.edges), []);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <BlogSection />
      {groupedPosts.map(({ fieldValue, edges }) => (
        <div className="">
          <h1 className="uppercase text-3xl md:text-5xl text-center text-yellow text-outline">
            {fieldValue}
          </h1>
          <div className="grid px-10 py-16 grid-cols-1 lg:grid-cols-2 gap-5">
            {edges
              .filter((edge) => !!edge.node.frontmatter.date)
              .map((edge) => (
                <PostLink showExcerpt key={edge.node.id} post={edge.node} />
              ))}
          </div>
        </div>
      ))}
      <div className="bg-pink px-10 py-16">
        <h1 className="uppercase text-5xl md:text-7xl text-center text-blue text-outline">
          Read More
        </h1>
        <div className="grid mx-auto gap-5 w-full md:w-2/3">
          {restPosts
            .filter((edge) => !!edge.node.frontmatter.date)
            .map(
              (edge) => {
                const { node: { excerpt, frontmatter: { path, thumbnail, title, date } } } = edge;
                return (
                  <Link to={path}>
                    <div className='px-10 py-16 border border-black rounded-2xl bg-white drop-shadow-solid hover:scale-105 transition-all cursor-pointer bg-white hover:bg-yellow'>
                      <h2 className="text-lg mb-4 mt-0">
                        {title}
                      </h2>
                      <p className="text-sm font-normal">{excerpt}</p>
                    </div>
                  </Link>
                )
            })}
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;
export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { eq: false }, travel: { ne: true } } }
    ) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
        edges {
          node {
            id
            excerpt(pruneLength: 220)
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
  }
`;
