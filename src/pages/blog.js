import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "react-query";
import Layout from "../components/layout";
import PostLink from "../components/postLink";
import "./blog.scss";
import { request } from "graphql-request";
import Button from "../components/button";

const BlogPage = ({ data: { site } }) => {
  const fetchPosts = async ({ pageParam = 0 }) => {
    const query = `
      query($skip: Int!, $limit: Int!) {
        blogPosts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { draft: { eq: false }, travel: { ne: true } }
          }
          skip: $skip
          limit: $limit
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

    const variables = { skip: pageParam, limit: 10 };

    const result = await request(
      window.location.origin + "/__graphql",
      query,
      variables
    );

    return result.blogPosts.edges;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useInfiniteQuery("blogPosts", fetchPosts, {
    getNextPageParam: (lastPage) =>
      lastPage.length === 10 ? data?.pages?.length * 10 : null,
  });

  const Posts = data?.pages
    ?.flatMap((page) => page)
    .filter((edge) => !!edge?.node?.frontmatter?.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="blog__title">
        <h1>Blog</h1>
      </div>
      <div className="blog__posts">{Posts}</div>
      <div className="blog__load-more" style={{ textAlign: "center" }}>
        {!hasNextPage && <div>No more posts</div>}
        {hasNextPage && (
          <Button
            text={isFetching ? "Loading..." : "Load more"}
            variant="blue"
            onClick={() => fetchNextPage(0)}
            disabled={isFetching}
          />
        )}
      </div>
    </Layout>
  );
};

const queryClient = new QueryClient();

const BlogPageWithProvider = (props) => (
  <QueryClientProvider client={queryClient}>
    <BlogPage {...props} />
  </QueryClientProvider>
);

export default BlogPageWithProvider;

export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
