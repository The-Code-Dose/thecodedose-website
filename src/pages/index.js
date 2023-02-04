import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import HeroHeader from '../components/heroHeader';
import BlogSection from '../components/blogSection';
import CSIllustrated from '../components/csIllustrated';
import DsaRevisionNotes from '../components/dsaRevisionNotes';
import ProductRecommendations from '../components/productRecommendations';
import GatsbyBlog from '../components/gatsbyBlog';
import RedBubble from '../components/redBubble';
import Youtube from '../components/youtube';

const IndexPage = ({
  data: {
    site,
    latestBlogPosts: { edges },
    reactBlogPosts: { edges: reactPosts },
    selfHelpBlogPosts: { edges: selfHelpPosts },
  },
}) => {
  const LatestPosts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const ReactPosts = reactPosts
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const SelfHelpPosts = selfHelpPosts
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <BlogSection />
      <CSIllustrated />
      <DsaRevisionNotes />
      <ProductRecommendations />
      <GatsbyBlog />
      <RedBubble />
      <Youtube />
      {/* <section className="newsletter-section">
        <iframe
          title="newsletter"
          className="card"
          src="https://thecodedose.substack.com/embed"
          height="320"
          style={{ width: '100%' }}
          frameBorder="0"
          scrolling="no"
        />
      </section> */}
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
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
    reactBlogPosts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: ["react"] }, draft: { eq: false } } }
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
    selfHelpBlogPosts: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: ["self help"] }, draft: { eq: false } } }
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
