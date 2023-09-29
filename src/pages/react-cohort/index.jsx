import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import {
  ArrowLongDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

import "./index.scss";
import Curriculum from "../../components/react-cohort/curriculum";
import Mentor from "../../components/react-cohort/mentor";
import Eligibility from "../../components/react-cohort/eligibility";
import Process from "../../components/react-cohort/process";
import PaymentStructure from "../../components/react-cohort/paymentStructure";
import Testimonials from "../../components/react-cohort/testimonials";
import Features from "../../components/react-cohort/features";
import WhyFrontend from '../../components/react-cohort/whyFrontend';

function ReactCohortPage({ data: { site } }) {
  return (
    <div className="react-cohort__container w-screen bg-slate-900 text-slate-100 pb-32">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div>
        <nav className="z-10 hidden font-light md:flex border-b border-slate-500 sticky top-0 w-full py-4 flex justify-center bg-slate-900 shadow-lg">
          <a className="text-yellow mx-3" href="#eligibility">
            Eligibility
          </a>
          <a className="text-yellow mx-3" href="#mentor">
            About Me
          </a>
          <a className="text-yellow mx-3" href="#program-details">
            Program Details
          </a>
          <a className="text-yellow mx-3" href="#process">
            Process
          </a>
          <a className="text-yellow mx-3" href="#curriculum">
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
              <span className="block w-fit m-auto text-4xl md:text-6xl text-fuchsia-500 -z-1 px-2 text-bold bg-slate-800">
                The Frontend Pill
              </span>
              Learn frontend development with ReactJS
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
                Sign Up for Free Webinar
              </motion.button>
            </a>
            {/* <span className="mt-3 text-xs">*Limited seats only*</span> */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-10 lg:px-0 text-yellow flex justify-between mt-10 text-sm md:w-3/4 m-auto"
            >
              <div>
                <h4 className="uppercase text-cyan-300 font-bold">
                  Applications Close on
                </h4>
                <span>30 June</span>
              </div>
              <div>
                <h4 className="uppercase text-cyan-300 font-bold">
                  Program Start Date
                </h4>
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
          <div className="">
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
        </div>
        <Eligibility />
        <Mentor />
        <Testimonials />
        <Features />
        <WhyFrontend />
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
          </div>
        </div>
        <Process />
        <Curriculum />
        <PaymentStructure />
        <div className="flex items-center justify-center gap-12 w-full text-xs mt-24">
          <a href="contact">
            <span className="text-white">Contact</span>
          </a>
          <a href="privacy">
            <span className="text-white">Privacy Policy</span>
          </a>
          <a href="tnc">
            <span className="text-white">Terms & Conditions</span>
          </a>
          <a href="refund">
            <span className="text-white">Refund Policy</span>
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
