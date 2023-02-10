import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import jsIllustratedThumbnail from '../images/js_illustrated.jpg';
import dsaIllustratedThumbnail from '../images/dsa_illustrated.jpg';
import leetcodeIllustratedThumbnail from '../images/leetcode_illustrated.jpg';

import './csIllustrated.scss';

const PDFS = {
  js: [
    {
      fileName: 'js_map_filter_reduce_array_methods.pdf',
      title: 'Map, Filter, Reduce',
    },
    {
      fileName: 'js_some_every_array_methods.pdf',
      title: 'Some & Every',
    },
    {
      fileName: 'js_optional_chaining.pdf',
      title: 'Optional Chaining',
    },
  ],
  dsa: [
    {
      fileName: 'dfs.pdf',
      title: 'Depth First Search',
    },
    {
      fileName: 'binary_search.pdf',
      title: 'Binary Search',
    },
    {
      fileName: 'recursion.pdf',
      title: 'Recursion',
    },
    {
      fileName: 'bubble_sort.pdf',
      title: 'Bubble Sort',
    },
    {
      fileName: 'stacks.pdf',
      title: 'Stacks',
    },
  ],
  leetcode: [
    {
      fileName: 'leetcode_17.pdf',
      title: 'Leetcode 17',
    },
    {
      fileName: 'leetcode_42.pdf',
      title: 'Leetcode 42',
    },
    {
      fileName: 'leetcode_78.pdf',
      title: 'Leetcode 78',
    },
    {
      fileName: 'leetcode_852.pdf',
      title: 'Leetcode 852',
    },
    {
      fileName: 'leetcode_1122.pdf',
      title: 'Leetcode 1122',
    },
  ],
};

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
          <img className="illustrated__img" src={jsIllustratedThumbnail} />
        </div>
        <div className="illustrated__right">
          <h1 className="illustrated__heading">
            JavaScript <span className="illustrated__heading--pink">Illustrated</span>
          </h1>
          <ul className="illustrated__content">
            {PDFS.js.map(pdf => <li><a href={`assets/pdf/${pdf.fileName}`} target="__blank">{pdf.title}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="illustrated__container illustrated__container-two">
        <div className="illustrated__left">
          <img className="illustrated__img" src={dsaIllustratedThumbnail} />
        </div>
        <div className="illustrated__right">
          <h1 className="illustrated__heading">
            Data Structures & Algorithms <span className="illustrated__heading--pink">Illustrated</span>
          </h1>
          <ul className="illustrated__content">
            {PDFS.dsa.map(pdf => <li><a href={`assets/pdf/${pdf.fileName}`} target="__blank">{pdf.title}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="illustrated__container illustrated__container-three">
        <div className="illustrated__left">
          <img className="illustrated__img" src={leetcodeIllustratedThumbnail} />
        </div>
        <div className="illustrated__right">
          <h1 className="illustrated__heading">
            Leetcode <span className="illustrated__heading--blue">Illustrated</span>
          </h1>
          <ul className="illustrated__content">
          {PDFS.leetcode.map(pdf => <li><a href={`assets/pdf/${pdf.fileName}`} target="__blank">{pdf.title}</a></li>)}
          </ul>
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
