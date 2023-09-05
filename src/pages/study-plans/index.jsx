import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import JavaScriptSection from './javascript';
import PythonSection from './python';
import GitSection from './git';
import DSASection from './dsa';
import ComboSection from './combo';
import Info from './info';
import Layout from "../../components/layout";

import "./study-plans.scss";


const StudyPlansPage = ({ data: { site } }) => (
  <Layout>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <div className="study-plans__header pb-16">
      <h1 className="study-plans__heading mt-16">
        <span className="study-plans__heading--focus">Coding</span> Study Plans
      </h1>
      <p className="study-plans__content">
        Transform Your Learning Journey with Our Study Plans
      </p>
    </div>
    <Info />
    <DSASection />
    <JavaScriptSection />
    <GitSection />
    <PythonSection />
    <ComboSection />
  </Layout>
);

export default StudyPlansPage;

export const pageQuery = graphql`
  query studyPlansPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
