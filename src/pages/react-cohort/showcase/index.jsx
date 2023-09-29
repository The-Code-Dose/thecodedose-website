import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { projects } from './projects';
import "../index.scss";


function ReactCohortShowcasePage({ data: { site } }) {
  return (
    <div className="react-cohort__showcase bg-slate-900 text-slate-100 py-20">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="w-fit m-auto text-center">
        <h1 className="mb-3 text-4xl md:text-6xl text-fuchsia-500 -z-1 px-2 text-bold bg-slate-800">
          Showcase
        </h1>
        <p className="text-cyan-300">Batch 1</p>
      </div>
      <div className="mt-10 mx-5 md:mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ title, thumbnail, url, author }) => (
          <a href={url} className="bg-slate-800 p-5 md:p-10 border rounded-md border-slate-500" target="_blank">
            <img src={thumbnail} className="rounded-md" />
            <h4 className='text-white my-3'>{title}</h4>
            <p className='text-white text-xs text-slate-500'>{author}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ReactCohortShowcasePage;

export const pageQuery = graphql`
  query reactCohortShowcasePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
