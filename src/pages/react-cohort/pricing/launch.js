import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import '../index.scss';

function ReactCohortPricingLaunchPage({ data: { site } }) {
  return (
    <div className="react-cohort__container react-cohort__hero flex justify-center align-middle w-screen h-screen bg-slate-900 text-slate-100">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="mx-10 md:mx-auto w-auto self-center md:w-1/2 bg-slate-800 p-10 border border-slate-500"
      >
        <h3 className="text-cyan-300 uppercase mb-5">
          Pricing Details
        </h3>
        <h5 className="text-yellow-400 mb-5">100% Money Back Guarantee</h5>
        <span className="text-xs text-slate-300">
          If you are not able to make a return on your investment after 6 months
          of finishing this program, i.e., you're not able to earn money, you will
          qualify for a 100% money back guarantee and get a full refund. Note that
          this guarantee is only valid if you diligently follow the coursework,
          finish homework, build projects as guided and are actively looking for
          work.
        </span>
        <div className="lg:flex mt-5">
          <h1 className="line-through text-4xl text-slate-300 mr-5">₹30,000</h1>
          <div>
            <div className="flex align-middle gap-3">
              <h1 className="text-fuchsia-400 text-4xl font-bold">₹10,000</h1>
              <span className="text-md self-center text-slate-400">+18% GST (TOTAL = ₹11,800)</span>
            </div>
            <span className="uppercase font-bold text-fuchsia-400">Special Launch offer</span>
            <span className="block text-xs text-slate-400">*Only for the members of the first cohort</span>
            <span className="block text-xs text-slate-400">*Payment in installments available</span>
          </div>
        </div>
        <a
          className="cursor-pointer"
          target="blank"
          href="https://forms.gle/EdwzEjpBd3UZNBeQ6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="block mt-12 text-md px-6 py-3  border border-slate-500 w-full font-bold bg-cyan-300 px-4 py-2 text-slate-900"
          >
            Join waitlist to get accepted
          </motion.button>
        </a>
      </motion.div>

    </div>
  );
}

export default ReactCohortPricingLaunchPage;

export const pageQuery = graphql`
  query reactCohortPricingLaunchPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
