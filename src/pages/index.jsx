import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Layout from '../components/layout';
import NewsletterSection from '../components/newsletterSection';
import HeroHeader from '../components/heroHeader';
import BlogSection from '../components/blogSection';
import DsaRevisionNotes from '../components/dsaRevisionNotes';
import GatsbyBlog from '../components/gatsbyBlog';
import RedBubble from '../components/redBubble';
import Youtube from '../components/youtube';

import './index.scss';
import DmmtNotes from '../components/dmmtNotes';
import StudyPlansSection from '../components/studyPlansSection';

function IndexPage({ data: { site } }) {
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <BlogSection />
      <StudyPlansSection />
      {/* <CSIllustrated /> */}
      {/* <DsaRevisionNotes /> */}
      {/* <ProductRecommendations /> */}
      {/* <GatsbyBlog />
      <DmmtNotes /> */}
      <RedBubble />
      <Youtube />
      <NewsletterSection />
    </Layout>
  );
}

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
