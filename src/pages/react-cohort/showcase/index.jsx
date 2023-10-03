import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import {
  projects,
  blogs,
} from "../../../utils/constants/react-cohort/showcase";
import "../index.scss";
import Navigation from "../../../components/react-cohort/navigation";

function ReactCohortShowcasePage({ data: { site } }) {
  return (
    <div className="react-cohort__showcase bg-neutral-900 text-slate-100 py-20">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Navigation />
      <div className="flex items-center flex-col">
        <h1 className="mb-3 rounded-md text-4xl md:text-7xl text-fuchsia-500 px-5 py-2 text-bold bg-indigo-1000">
          🏆 Showcase
        </h1>
        <p className="text-lg text-yellow rounded-md bg-indigo-900 w-fit px-5 opacity-80 -rotate-6 font-bold uppercase -translate-y-3 md:-translate-y-5">
          Batch I
        </p>
      </div>
      <div className="mx-5 md:mx-16">
        <h2 className="text-cyan-300 text-3xl md:text-4xl mt-24 mb-18">
          🛠️ Projects
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ title, thumbnail, url, author, tags }) => (
            <div className="p-5 md:p-10 border rounded-md bg-radial-glass border border-indigo-700/30 hover:drop-shadow-[0_5px_10px_rgba(34,211,238,0.3)] hover:border-cyan-400/20">
              <a href={url} target="_blank">
                <img
                  src={thumbnail}
                  className="rounded-md border border-indigo-700/30"
                />
              </a>
              <h4 className="text-white mt-8 mb-3">{title}</h4>
              <p className="text-xs text-slate-400">{author}</p>
              <div className="mt-5 gap-3 flex flex-wrap">
                {tags?.map((tag) => (
                  <span className="text-cyan-400 px-3 py-2 border border-cyan-400 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-cyan-300 text-3xl md:text-4xl mt-24 mb-18">
          📝 Articles
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map(({ title, thumbnail, url, author, tags }) => (
            <div className="p-5 md:p-10 rounded-md bg-radial-glass border border-indigo-700/30 hover:drop-shadow-[0_5px_10px_rgba(34,211,238,0.3)] hover:border-cyan-400/20">
              <a href={url} target="_blank">
                <img
                  src={thumbnail}
                  className="rounded-md border border-indigo-700/30"
                />
              </a>
              <h4 className="text-white mt-8 mb-3">{title}</h4>
              <p className="text-xs text-slate-400">{author}</p>
            </div>
          ))}
        </div>
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
