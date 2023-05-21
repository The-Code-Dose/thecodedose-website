import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import './moduleTemplate.scss';
import Button from '../components/button';

export default function ModuleTemplate({
  data,
  pageContext,
}) {
  const { slug } = pageContext;

  const {
    site, markdownRemark, curriculum,
  } = data;
  const { siteMetadata: { title: siteTitle } } = site;

  const {
    frontmatter: {
      title: blogTitle,
      metaDescription: blogMetaDescription,
      thumbnail,
    },
    html,
    tableOfContents,
  } = markdownRemark;

  const { frontmatter: { curriculum: curriculumTitle, description, modules } } = curriculum;

  const currentModule = modules.reduce((acc, m, i) => {
    if (m.slug === slug) {
      return i;
    }
    return acc;
  }, 0);

  const nextModule = currentModule + 1;
  const previousModule = currentModule - 1;

  return (
    <Layout>
      <Helmet>
        <title>
          {`${blogTitle} | ${siteTitle}`}
        </title>
        <meta name="description" content={blogMetaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thecodedose.com" />
        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogMetaDescription} />
        <meta property="og:image" content={thumbnail} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@thecodedose" />
        <meta name="twitter:title" content={blogTitle} />
        <meta name="twitter:description" content={blogMetaDescription} />
        <meta name="twitter:image" content={thumbnail} />
      </Helmet>
      <div className="curriculum__title">
        <h4>{curriculumTitle}</h4>
        <p>{description}</p>
      </div>
      <div className="parent__container">
        <div className="curriculum__container">
          <div className="module__table">
            <h3 className="module__table-title">Lessons</h3>
            <section
              className="module__table-list"
            >
              <ol>
                {modules?.map((m) => <li><a href={`/curriculum/${curriculumTitle}/${m.slug}`}>{m.title}</a></li>)}
              </ol>
            </section>
          </div>
        </div>
        <div className="module__container">
          <article className="module__section">
            <div className="module__left">
              <div className="module__title">
                <h1>{blogTitle}</h1>
              </div>
              <img className="module__thumbnail" src={thumbnail} />
              <div
                className="module__content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            <div className="module__table">
              <h3 className="module__table-title">Table of Contents</h3>
              <section
                className="module__table-list"
                dangerouslySetInnerHTML={{ __html: tableOfContents }}
              />
            </div>
            <div className="module__nav-container">
              {previousModule >= 0 ? <Button link to={`/curriculum/${curriculumTitle}/${modules[previousModule].slug}`} text="< Previous" /> : <div />}
              {nextModule < modules.length ? <Button to={`/curriculum/${curriculumTitle}/${modules[nextModule].slug}`} link text="Next >" /> : <div />}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!, $curriculum: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.slug")
      frontmatter {
        slug
        title
        thumbnail
        metaDescription
      }
    }
    curriculum: markdownRemark(frontmatter: { template: { eq: "CurriculumTemplate" }, curriculum: { eq: $curriculum } }) {
      frontmatter {
        curriculum
        description
        modules {
          title
          slug
        }
      }
    }
  }
`;
