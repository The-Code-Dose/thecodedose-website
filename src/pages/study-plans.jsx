import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Button from '../components/button';
import Layout from '../components/layout';
import thumbnail from '../../static/assets/js-plan.png';
import demo from '../../static/assets/study-plans-demo.png';
import combo from '../../static/assets/study-plans-combo.png';

import './study-plans.scss';

const StudyPlansPage = ({
  data: {
    site,
  },
  location,
}) => (
  <Layout location={location}>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <div
      className="study-plans__header"
    >
      <h1 className="study-plans__heading">
        <span className="study-plans__heading--focus">Coding</span> Study Plans
      </h1>
      <p className="study-plans__content">
        Transform Your Learning Journey with Our Study Plans
      </p>
    </div>
    <div className="study-plans__info bg-white">
      <h1 className="study-plans__info-heading">
        Achieve Your Coding Goals with Customizable Notion Templates
      </h1>
      <h3>Track Progress, Stay Motivated, and Manage Your Time Effectively</h3>
      <p>
        These study plans are hosted on Notion and are designed to help you achieve your goals, no matter how busy your schedule. With customizable timelines and a variety of resources, you can stay motivated and on track throughout your journey.
      </p>

      <img className="study-plans__demo" src={demo} />

      <div className="study-plans__info-features">
        <div>
          <h4>Customizable Timelines</h4>
          <p>The templates are designed with busy individuals in mind. Whether you have a full-time job or a busy family schedule, the timelines can be adjusted to fit your commitments. Simply drag and drop tasks to fit your schedule and stay on track.</p>
        </div>
        <div>
          <h4>Track Progress with Kanban Boards</h4>
          <p>The Kanban boards make it easy to track your progress towards your goals. With customizable columns and cards, you can easily see what tasks you have completed and what still needs to be done. This visual system is great for keeping you motivated and focused.</p>
        </div>
        <div>
          <h4>Suits Different Learning Styles</h4>
          <p>The templates come with a mix of resources, including YouTube videos, blog posts, and practice exercises. This variety of resources ensures that you stay engaged and motivated throughout your journey. Whether you prefer to read, watch, or practice, we have something for everyone.</p>
        </div>
        <div>
          <h4>Pomodoro Timer Included</h4>
          <p>The templates also include a Pomodoro timer, so you can manage your time effectively and stay productive. This time management technique has been proven to increase focus and productivity, making it the perfect addition to the templates.</p>
        </div>
      </div>

      <Button text="View Demo" variant="blue" link to="https://youtu.be/v8pNl4GifUQ" />
    </div>
    <section className="dsa-plan__container bg-white" id="dsa-notes">
      <div className="dsa-plan__left">
        <div className="dsa-plan__heading-container">
          <h1 className="dsa-plan__heading">
            90 Days Data Structures & Algorithms Study Plan
          </h1>
          <h3 className="dsa-plan__subheading">Become interview ready in just 90 days!</h3>
        </div>
        <div className="dsa-plan__content-container">
          <p className="dsa-plan__content">
          This study plan will make you proficient in Data Structures and Algorithms (in 90 days if you wish to take the challenge). The goal is to make you feel confident for technical interviews as well as equip you with the right skills to approach problems.
          </p>
          <Button text="I want this!" variant="blue" link to="https://tagmango.com/mangocheckout/642074a1131c482eadabe331" />
        </div>
      </div>
      <div className="dsa-plan__right" />
    </section>
    <section className="js-plan__container" id="js-plan">
      <div className="js-plan__left">
        <img className="js-plan__img" src={thumbnail} />
      </div>
      <div className="js-plan__right">
        <h1 className="js-plan__heading">
          21 days
          <br></br>
          <span className="js-plan__heading--pink">JAVASCRIPT</span>
          <br></br>Study Plan
        </h1>
        <h3 className="js-plan__subheading">Become a JavaScript developer in 21 days!</h3>
        <p className="js-plan__content">
          This self study plan covers everything that you need to know to become a confident JavaScript developer!
        </p>
        <Button text="I want this!" color="yellow" link to="https://tagmango.com/mangocheckout/644582e75c04157faec0d217" />
      </div>
    </section>
    <section className="git-plan__container" id="gastby-blog">
      <div className="git-plan__left">
        <h2 className="git-plan__heading">
          Git & GitHub Study Plan
        </h2>
        <h3 className="git-plan__subheading">Learn how to collaborate efficiently with other engineers!</h3>
        <p className="git-plan__content">
          This study plan is a Notion template that will make you comfortable with using Git and GitHub. After studying everything in this plan, you’ll be able to integrate Git and GitHub in your daily projects.
        </p>
        <Button text="I want this!" variant="black" link to="https://tagmango.com/mangocheckout/64396cd8a54f283500066b73" />
      </div>
      <div className="git-plan__right" />
    </section>
    <section className="python-plan__container" id="dsa-notes">
    <div className="python-plan__left" />
      <div className="python-plan__right">
        <div className="python-plan__heading-container">
          <h1 className="python-plan__heading">
            20 Days Python Study Plan
          </h1>
          <h3 className="python-plan__subheading">Master Python in just 20 days!</h3>
        </div>
        <div className="python-plan__content-container bg-white">
          <p className="python-plan__content">
            This study plan is tailored to help you learn Python in just 20 days, and  will equip you with all the foundational knowledge and practical skills you need to succeed. By the end of this plan, you'll be proficient in Python and ready to explore advanced topics like Data Science, Machine Learning, and more.
          </p>
          <Button text="I want this!" variant="blue" link to="https://tagmango.com/mangocheckout/645252622f1421f67c1fba99" />
        </div>
      </div>
    </section>
    <section id="combo" className="study-plans__combo bg-white">
      <h1 className="study-plans__combo-heading">
        Special Offer
      </h1>
      <h2 className="study-plans__combo-subheading">
        Get flat 10% OFF on this combo
      </h2>
      <p>Data Structures & Algorithms + JavaScript + Git/GitHub Self Study Plans</p>
      <img className="study-plans__combo-img" src={combo} />
      <h2 className="study-plans__combo-subheading-2">Get ADDITIONAL 30% OFF using the coupon 'WEBSITE30'</h2>
      <Button className="study-plans__combo-btn" text="I want this!" variant="yellow" link to="https://tagmango.com/mangocheckout/644775cbeaa7cabe22e983c2" />
    </section>
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
