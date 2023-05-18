import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroHeader from "../components/heroHeader";
import BlogSection from "../components/blogSection";
import CSIllustrated from "../components/csIllustrated";
import DsaRevisionNotes from "../components/dsaRevisionNotes";
import ProductRecommendations from "../components/productRecommendations";
import GatsbyBlog from "../components/gatsbyBlog";
import RedBubble from "../components/redBubble";
import Youtube from "../components/youtube";
import demo from "../../static/assets/study-plans-demo.png";

import "./index.scss";
import DmmtNotes from "../components/dmmtNotes";

const IndexPage = ({ data: { site } }) => {
  const [newsletterDetails, setNewsletterDetails] = useState({});
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(newsletterDetails.email, {
      FNAME: newsletterDetails.firstName,
      LNAME: newsletterDetails.lastName,
    })
      .then((data) => {
        setSubscribed(true);
        alert("Successfully subscribed!");
      })
      .catch(() => {
        alert("Uh Oh! Something went wrong");
      });
  };

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <BlogSection />
      <div className="study-plans__header">
        <h1 className="study-plans__heading">
          <span className="study-plans__heading--focus">Coding</span> Study
          Plans
        </h1>
        <p className="study-plans__content">
          Transform Your Learning Journey with Our Study Plans
        </p>
        <img className="study-plans__demo" src={demo} />
        <Button
          className="study-plans-section__btn"
          text="Explore"
          variant="yellow"
          link
          to="/study-plans"
        />
      </div>
      <CSIllustrated />
      <DsaRevisionNotes />
      <ProductRecommendations />
      <GatsbyBlog />
      <DmmtNotes />
      <RedBubble />
      <Youtube />
      <section className="newsletter-section" id="newsletter">
        <form className="newsletter-section__form" onSubmit={handleSubmit}>
          <h1>Subscribe to get access to exclusive coding tutorials, tips, and tricks!</h1>
          <label>
            First Name:
            <input
              className="site-footer__input"
              type="text"
              value={newsletterDetails.firstName}
              onChange={(e) =>
                setNewsletterDetails({
                  ...newsletterDetails,
                  firstName: e.target.value,
                })
              }
            />
          </label>
          <label>
            Last Name:
            <input
              className="site-footer__input"
              type="text"
              value={newsletterDetails.lastName}
              onChange={(e) =>
                setNewsletterDetails({
                  ...newsletterDetails,
                  lastName: e.target.value,
                })
              }
            />
          </label>
          <label>
            Email:
            <input
              className="site-footer__input"
              type="text"
              value={newsletterDetails.email}
              required
              onChange={(e) =>
                setNewsletterDetails({
                  ...newsletterDetails,
                  email: e.target.value,
                })
              }
            />
          </label>
          <input
            className="site-footer__input newsletter-section__submit"
            type="submit"
            value={subscribed ? "Subscribed" : "Subscribe!"}
            disabled={subscribed}
          />
        </form>
      </section>
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
  }
`;
