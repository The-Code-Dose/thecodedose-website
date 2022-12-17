import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Button from '../components/button';
import thumbnail from '../images/featured_blog_thumbnail.png';

import './csIllustrated.scss';

const CsIllustratedPage = ({
  data: {
    site,
  },
}) => (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="illustrated__container illustrated__container-one">
        <div className="illustrated__left">
          <img className="illustrated__img" src={thumbnail} />
        </div>
        <div className="illustrated__right">
          <h1 className="illustrated__heading">
            JavaScript <span className="illustrated__heading--pink">Illustrated</span>
          </h1>
          <p className="illustrated__content">
            This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
          </p>
          <Button text="View More" color="yellow" />
        </div>
      </div>
      <div className="illustrated__container illustrated__container-two">
        <div className="illustrated__left">
          <img className="illustrated__img" src={thumbnail} />
        </div>
        <div className="illustrated__right">
          <h1 className="illustrated__heading">
            Data Structures & Algorithms <span className="illustrated__heading--pink">Illustrated</span>
          </h1>
          <p className="illustrated__content">
            This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
          </p>
          <Button text="View More" variant="black" />
        </div>
      </div>
      <div className="illustrated__container illustrated__container-three">
        <div className="illustrated__left">
          <img className="illustrated__img" src={thumbnail} />
        </div>
        <div className="illustrated__right">
          <h1 className="illustrated__heading">
            Leetcode <span className="illustrated__heading--blue">Illustrated</span>
          </h1>
          <p className="illustrated__content">
            This short quiz will sort you out. Answer a few simple questions to get personal career advice and course recommendations.
          </p>
          <Button text="View More" variant="yellow" />
        </div>
      </div>
    </Layout>
  );

export default CsIllustratedPage;

export const pageQuery = graphql`
  query csIllustratedPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
