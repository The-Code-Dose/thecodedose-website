import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import {
  ArrowLongDownIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import urvashi1 from '../../images/urvashi_1.jpg';
import chatIcon from '../../images/chat_icon.png';
import mentoringIcon from '../../images/mentoring_icon.png';
import placementIcon from '../../images/placement_icon.png';
import projectIcon from '../../images/project_icon.png';
import communityIcon from '../../images/community_icon.png';
import accessIcon from '../../images/access_icon.png';
import doubtsIcon from '../../images/doubts_icon.png';
import sessionsIcon from '../../images/sessions_icon.png';

import './index.scss';
import Curriculum from '../../components/react-cohort/curriculum';
import Mentor from '../../components/react-cohort/mentor';
import Eligibility from '../../components/react-cohort/eligibility';
import Process from '../../components/react-cohort/process';
import PaymentStructure from '../../components/react-cohort/paymentStructure';
import Guarantee from '../../components/react-cohort/guarantee';

function ReactCohortPage({ data: { site } }) {
  return (
    <div className="react-cohort__container w-screen bg-slate-900 text-slate-100 pb-32">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div>
        <nav className="z-10 hidden font-light md:flex border-b border-slate-500 sticky top-0 w-full py-4 flex justify-center bg-slate-900 shadow-lg">
          <a className="text-yellow-200 mx-3" href="#eligibility">
            Eligibility
          </a>
          <a className="text-yellow-200 mx-3" href="#mentor">
            About Me
          </a>
          <a className="text-yellow-200 mx-3" href="#program-details">
            Program Details
          </a>
          <a className="text-yellow-200 mx-3" href="#process">
            Process
          </a>
          <a className="text-yellow-200 mx-3" href="#curriculum">
            Curriculum
          </a>
        </nav>
        <div className="react-cohort__hero h-screen text-center w-full">
          <div className="w-full md:w-2/3 mx-auto">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold md:text-3xl lg:leading-tight lg:m-auto pt-28"
            >
              Your journey to become a high-earning
              <span className="block w-fit m-auto text-3xl md:text-5xl text-fuchsia-500 -z-1 px-2 text-bold bg-slate-800">
                React Developer
              </span>
              starts here
            </motion.h1>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://products.thecodedose.com/"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="block mx-auto mt-12 text-md px-6 py-3  border border-slate-500 uppercase font-bold bg-cyan-300 px-4 py-2 text-slate-900"
              >
                Buy Now!
              </motion.button>
            </a>
            {/* <span className="mt-3 text-xs">*Limited seats only*</span> */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-10 lg:px-0 text-yellow-200 flex justify-between mt-10 text-sm md:w-3/4 m-auto"
            >
              <div>
                <h4 className="uppercase text-cyan-300 font-bold">Applications Close on</h4>
                <span>30 June</span>
              </div>
              <div>
                <h4 className="uppercase text-cyan-300 font-bold">Program Start Date</h4>
                <span>24 July</span>
              </div>
            </motion.div>
            <ArrowLongDownIcon class="animate-bounce m-auto mt-16 h-12 w-12 text-cyan-400" />
            <a href="#start" className="text-xs text-cyan-400">
              Learn More
            </a>
          </div>
        </div>
        <div id="start" className="lg:flex mx-10 md:mx-16 pt-20 gap-10">
          <div className="lg:w-1/2 ">
            <h1 className="text-slate-100 text-4xl w-full lg:w-3/4">
              I will help you start making money as a React developer with a{' '}
              <span className="text-fuchsia-400">
                100% money-back guarantee*
              </span>
              !
            </h1>
            <div className="mt-10">
              <div className="flex gap-3">
                <div>
                  <ArrowLongRightIcon className="w-8 h-8 text-green-300" />
                </div>
                <span>
                  Do you want to become a React developer but are tired of
                  unstructured learning content?
                </span>
              </div>
              <div className="flex gap-3 mt-5">
                <div>
                  <ArrowLongRightIcon className="w-8 h-8 text-green-300" />
                </div>
                <span>
                  Are you stuck in a tutorial hell and in need of some guidance?
                </span>
              </div>
              <div className="flex gap-3 mt-5">
                <div>
                  <ArrowLongRightIcon className="w-8 h-8 text-green-300" />
                </div>
                <span>
                  Do you want to start making money with your skills but you
                  don't know where to start?
                </span>
              </div>
            </div>
            <div className="mt-10 text-xl">
              Then you have come to the right place! I've created this program
              to help individuals like you enter the world of tech.
            </div>
          </div>
          <img
            className="lg:w-1/2 rounded-t-full mt-10 lg:mt-0 border border-slate-500"
            src={urvashi1}
          />
        </div>
        <Eligibility />
        <Mentor />
        <div id="program-details" className="mt-32 mx-10 md:mx-16">
          <h1 className="text-fuchsia-400 mb-10 text-5xl">
            What's included in the program?
          </h1>
          <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.05 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={sessionsIcon} />
              <h4 className="text-cyan-300 uppercase my-5">
                Knowledge on demand
              </h4>
              <p>
                Weekly recorded sessions that you can take at your convenience
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={doubtsIcon} />
              <h4 className="text-cyan-300 uppercase my-5">
                Weekly LIVE Sessions
              </h4>
              <p>
                Doubt and 1:1 sessions every weekend to help resolve your issues
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.15 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={chatIcon} />
              <h4 className="text-cyan-300 uppercase my-5">
                Daily chat support
              </h4>
              <p>Daily chat support available on our Discord channel</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={communityIcon} />
              <h4 className="text-cyan-300 uppercase my-5">
                Tight Knit developer community
              </h4>
              <p>Access to a community of like-minded developers</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.25 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={accessIcon} />
              <h4 className="text-cyan-300 uppercase my-5">
                1 year access to all course content
              </h4>
              <p>
                All course content will be available to you even after the
                program ends
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={placementIcon} />
              <h4 className="text-cyan-300 uppercase my-5">
                Extended Placement Assistance
              </h4>
              <p>
                I will offer extended support until you get your first
                paying-gig, with no extra cost!
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.35 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={projectIcon} />
              <h4 className="text-cyan-300 uppercase my-5">
                Project focused learning
              </h4>
              <p>Helping you build projects that stand out to recruiters</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <img className="lg:w-1/2" src={mentoringIcon} />
              <h4 className="text-cyan-300 uppercase my-5">1:1 Mentoring</h4>
              <p>
                Gain individualized guidance, feedback, and support tailored to
                your needs.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="mx-10 md:mx-16 mt-32" id="eligibility">
          <h1 className="text-fuchsia-400 mb-10 text-5xl">
            How is this program different than others?
          </h1>
          <div className="inline-grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.05 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <h3 className="text-cyan-300 uppercase mb-5">
                Small Cohort, Big Advantages
              </h3>
              <p>
                This cohort is intentionally kept small (with less than 10
                students) to make it possible to give you individualized
                feedback and mentorship tailored to your unique learning needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <h3 className="text-cyan-300 uppercase mb-5">
                10X Engineering with Generative AI
              </h3>
              <p>
                Our modern curriculum is specifically designed to equip you with
                the skills and knowledge needed to leverage the potential of
                Generative AI and take your productivity to new heights.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.15 }}
              className="bg-slate-800  p-10 border border-slate-500"
            >
              <h3 className="text-cyan-300 uppercase mb-5">
                Open Source Contribution Guidance
              </h3>
              <p>
                Learn how to get started with open source and make meaningful
                contributions to real world projects and earn money in $$$.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <h3 className="text-cyan-300 uppercase mb-5">
                Focus on building in public
              </h3>
              <p>
                This program encourages you to build in public to level up your
                visibility, credibility, and career prospects
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.25 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <h3 className="text-cyan-300 uppercase mb-5">
                Unique style of teaching
              </h3>
              <p>
                I believe that learning to code shouldn't be intimidating, nor
                boring. That's why I've built the curriculum designed to suit
                the modern learner.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800 p-10 border border-slate-500"
            >
              <h3>
                <a
                  href="#guarantee"
                  className="text-cyan-300 hover:text-fuchsia-300 cursor-pointer uppercase mb-5"
                >
                  100% Money Back Guarantee*
                </a>
              </h3>
              <p>
                If you are not able to make a return on your investment within 6
                months of finishing this program, you will qualify for a 100%
                money back guarantee and get a full refund.
              </p>
            </motion.div>
          </div>
        </div>
        <Process />
        <Curriculum />
        <PaymentStructure />
        <Guarantee />
        {/* <div className="mx-10 md:mx-16 mt-36" id="testimonials">
          <h1 className="text-fuchsia-400 text-5xl">
            What my mentees are saying:
          </h1>
        </div> */}
        <div className="flex items-center justify-center gap-12 w-full text-xs mt-24">
          <a href="privacy">
            <span className="text-white">
              Privacy Policy
            </span>
          </a>
          <a href="tnc">
            <span className="text-white">
              Terms & Conditions
            </span>
          </a>
          <a href="refund">
            <span className="text-white">
              Refund Policy
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReactCohortPage;

export const pageQuery = graphql`
  query reactCohortPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

// b
