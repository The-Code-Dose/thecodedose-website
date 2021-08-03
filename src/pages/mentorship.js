import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import './mentorship.scss';

const MentorshipPage = ({
  data: {
    site,
  },
}) => (
  <Layout>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <h2>Mentorship Program &darr;</h2>
    <div className="mentorship__container">
      <div>
        <h1 className="mentorship__heading">Apply as a Mentee!</h1>
        <p>
          If you're looking for mentorship, please fill the form below.
        </p>
        <a href="https://forms.gle/a7Mow5tNvccqdFA66" target="__blank">
          <button className="mentorship__button">Signup as a mentee</button>
        </a>
      </div>
      <div>
        <h1 className="mentorship__heading">Apply as a Mentor!</h1>
        <p>
          If you wish to volunteer your time to mentor someone, please fill the form below.
        </p>
        <a href="https://forms.gle/5pA1sBb4j6ZVBWFcA" target="__blank">
          <button className="mentorship__button">Signup as a mentor</button>
        </a>
      </div>
    </div>
    <br></br>
    <br></br>
    <h2>How does this work?</h2>
    <p>
      I will match mentees with mentors based upon the responses from the signup forms and will be sending out emails for each pair so that you can connect with each other.
      <br></br>
      <br></br>
      It is advised for the mentees and mentors to figure out how this mentorship would 
      look like for them since everyone's needs are different.
      This program just serves as a platform for connecting people together :)
      <br></br>
      <br></br>
      If you have any feedback on how to make this process better, please write to <a href="mailto:thecodedoseofficial@gmail.com">thecodedoseofficial@gmail.com</a>
    </p>
  </Layout>
);

export default MentorshipPage;
export const pageQuery = graphql`
  query mentorshipPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
