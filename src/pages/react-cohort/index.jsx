import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import { ArrowLongDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import "./index.scss";
import Curriculum from "../../components/react-cohort/curriculum";
import Mentor from "../../components/react-cohort/mentor";
import Eligibility from "../../components/react-cohort/eligibility";
import Process from "../../components/react-cohort/process";
import PaymentStructure from "../../components/react-cohort/paymentStructure";
import Testimonials from "../../components/react-cohort/testimonials";
import Features from "../../components/react-cohort/features";
import WhyFrontend from "../../components/react-cohort/whyFrontend";
import Navigation from "../../components/react-cohort/navigation";
import { HOME_LINKS } from "../../utils/constants/react-cohort/links";
import WhyUs from "../../components/react-cohort/whyUs";
import Values from "../../components/react-cohort/values";
import Footer from "../../components/react-cohort/footer";

const INTRO_CONTENT = [
  `Do you want to become a frontend developer but are tired of
  unstructured learning content?`,
  `Are you stuck in a tutorial hell and in need of some guidance?`,
  `Do you want to learn how real world applications are built?`,
];

function ReactCohortPage({ data: { site } }) {
  return (
    <div className="react-cohort__container bg-indigo-1000 text-neutral-100">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div>
        <Navigation />
        <nav className="z-10 opacity-95 backdrop-blur-xl hidden md:flex drop-shadow-lg border-b border-t border-indigo-900 fixed top-12 w-full py-4 flex justify-center gap-10 bg-radial-glass shadow-lg text-xs">
          {HOME_LINKS.map(({ label, link }) => (
            <a className="text-indigo-100" href={link}>
              {label}
            </a>
          ))}
        </nav>
        <div className="react-cohort__hero h-screen text-center w-full flex items-center justify-center">
          <div className="w-full md:w-2/3 flex flex-col items-center">
            <h1 className="w-fit text-4xl rounded-md mx-3 md:text-6xl text-fuchsia-400 mb-3 -z-1 p-4 text-bold border bg-radial-glass opacity-85 backdrop-blur-sm drop-shadow-[0_5px_10px_rgba(34,211,238,0.3)] border-cyan-400/20">
              The Frontend Pill
            </h1>
            <span className="text-lg text-yellow font-bold rounded-md bg-indigo-900 w-fit px-5 opacity-80 -rotate-6 font-bold uppercase -translate-y-3 md:-translate-y-5 border border-cyan-400/20">
              Batch II
            </span>
            <motion.h2 className="text-xl mt-0 font-extrabold md:text-3xl lg:leading-tight lg:m-auto">
              Learn frontend development with ReactJS
            </motion.h2>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://forms.gle/CwSveJPJe3YKptxZ7"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="block mx-auto mt-16 mb-12 text-md px-6 py-3 uppercase font-bold bg-cyan-300 px-4 py-2 text-neutral-900"
              >
                Join the Waitlist
              </motion.button>
            </a>
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-10 lg:px-0 text-indigo-100 flex justify-between text-sm md:w-3/4 m-auto"
            >
              <div>
                <h4 className="uppercase text-fuchsia-400 font-bold">
                  Webinar Date
                </h4>
                <span>15 October</span>
              </div>
              <div>
                <h4 className="uppercase text-fuchsia-400 font-bold">
                  Program Begins
                </h4>
                <span>14 November (Tentative)</span>
              </div>
            </motion.div> */}
            <div className="flex mt-5 flex-col items-center justify-center">
              <ArrowLongDownIcon class="animate-bounce h-12 w-12 text-cyan-400" />
              <a href="#start" className="text-xs text-cyan-400">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
          id="start"
          className="lg:flex flex-col px-10 md:px-16 pt-20 gap-10 w-full"
        >
          <div className="mt-10 text-xl font-bold text-indigo-100 flex flex-col gap-5">
            {INTRO_CONTENT.map((c) => (
              <div className="bg-radial-glass rounded-md border border-indigo-700/30 px-4 md:px-8 py-10 flex gap-3">
                <div>
                  <ArrowRightIcon className="w-8 h-8" />
                </div>
                <span className="bg-gradient-to-r from-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                  {c}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-xl">
            Then you have come to the right place!
          </div>
        </div>
        <Eligibility />
        <Features />
        <Curriculum />
        <WhyUs />
        <Values />
        <WhyFrontend />
        <Mentor />
        <Testimonials />
        <PaymentStructure />
        <Footer />
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
