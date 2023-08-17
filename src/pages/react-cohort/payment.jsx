import React, { Fragment, useState } from 'react';
import Helmet from 'react-helmet';
import { Dialog, Transition } from '@headlessui/react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import {
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import UpiSs from '../../images/upi_8800.jpeg';
import './index.scss';

export function PaymentsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [upiSelected, setUpiSelected] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openModal}
          className="block mx-auto mt-12 text-md px-6 py-3 uppercase font-bold bg-cyan-300 px-4 py-2 text-slate-900"
        >
          Pay the remaining fee
        </motion.button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-slate-50 uppercase"
                  >
                    Reserve your spot
                  </Dialog.Title>
                  <div className="mt-5">
                    {upiSelected ? (
                      <>
                        <span className="text-slate-300">
                          Scan this QR with the payment app of your choice and
                          share the screenshot on thecodedoseofficial@gmail.com
                          along with the billing address of bank account holder.
                        </span>
                        <img
                          className="border border-slate-500 mt-4"
                          src={UpiSs}
                        />
                      </>
                    ) : (
                      <p className="text-sm text-slate-300">
                        Please choose a payment option:
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between gap-5">
                    <a
                      className="cursor-pointer"
                      target="blank"
                      href="https://buy.stripe.com/6oE8A6ayr6SFbxSeUW"
                    >
                      <button
                        type="button"
                        className="block mx-auto mt-12 text-md font-bold bg-cyan-300 px-4 py-2 text-slate-900"
                        onClick={closeModal}
                      >
                        Credit/Debit Card
                      </button>
                    </a>
                    <button
                      type="button"
                      className={`block mx-auto mt-12 text-md font-bold px-4 py-2 text-slate-900 ${
                        upiSelected ? 'bg-slate-300' : 'bg-cyan-300'
                      }`}
                      onClick={() => setUpiSelected(true)}
                    >
                      UPI (PayTM, PhonePe etc)
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function ReactCohortAcceptedPage({ data: { site } }) {
  return (
    <div className="react-cohort__container justify-center align-middle w-screen bg-slate-900 text-slate-100">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="react-cohort__hero h-screen text-center w-full">
        <nav className="z-10 hidden font-light md:flex border-b border-slate-500 sticky top-0 w-full py-4 flex justify-center bg-slate-900 shadow-lg">
          <a className="text-yellow-200 mx-3" href="/react-cohort">
            Home
          </a>
          <a className="text-yellow-200 mx-3" href="#pricing">
            Pricing Structure
          </a>
          <a className="text-yellow-200 mx-3" href="#steps">
            Next Steps
          </a>
        </nav>
        <div className="w-full md:w-2/3 mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold md:text-3xl lg:leading-tight lg:m-auto pt-28"
          >
            <span className="block w-fit m-auto mb-10 text-3xl md:text-5xl text-fuchsia-500 -z-1 px-2 text-bold bg-slate-800">
              Welcome to the program
            </span>
            Your spot was successfully reserved!
          </motion.h1>
          <PaymentsModal />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="px-10 lg:px-0 text-yellow-200 mt-10 text-sm md:w-3/4 m-auto"
        >
          <div>
            <h4 className="uppercase text-cyan-300 font-bold">Deadline</h4>
            <span>10th August</span>
          </div>
        </motion.div>
      </div>
      <div id="pricing" className="lg:flex mx-10 md:mx-16 gap-10">
        <div className="lg:w-1/2 ">
          <h1 className="text-fuchsia-400 text-5xl w-full">
            Pricing Structure
          </h1>
          <p className="mt-10">
            Upon requests, I've decided to provide a flexible payment plan.
          </p>
          <ol className="mt-10">
            <li className="mb-5">
              1. You have to pay the rest of the fee amount by{' '}
              <span className="font-bold text-yellow-300">August 10th</span>.
            </li>
            <li>
              2. If you're facing any issues or need an extension, you can write
              to me via email -{' '}
              <span className="font-bold text-yellow-300">
                thecodedoseofficial@gmail.com
              </span>
            </li>
          </ol>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-full lg:w-1/2 lg:mx-10 md:mx-auto w-auto self-center mt-10 lg:mt-0 bg-slate-800 p-10 border border-slate-500"
        >
          <h3 className="text-cyan-300 uppercase mb-5">Pricing Details</h3>
          <h5 className="text-yellow-400 mb-5">100% Money Back Guarantee</h5>
          <span className="text-xs text-slate-300">
            If you are not able to make a return on your investment after 6
            months of finishing this program, i.e., you're not able to earn
            money, you will qualify for a 100% money back guarantee and get a
            full refund. Note that this guarantee is only valid if you
            diligently follow the coursework, finish homework, build projects as
            guided and are actively looking for work.
          </span>
          <div className="lg:flex mt-5">
            <h1 className="text-2xl text-slate-300 mr-5">
              ₹11800 - ₹3000
            </h1>
            <div>
              <div className="align-middle gap-3">
                <h1 className="text-fuchsia-400 text-3xl font-bold">= ₹8800</h1>
                <span className="text-md self-center text-slate-400">
                  (including 18% GST)
                </span>
              </div>
            </div>
          </div>
          <PaymentsModal />
        </motion.div>
      </div>
      <div id="steps" className="mt-32 mx-10 md:mx-16 pb-32">
        <h1 className="text-fuchsia-400 mb-10 text-5xl">
          What are the next steps?
        </h1>
        <div className="mt-10">
          <div className="flex gap-3">
            <div>
              <ArrowLongRightIcon className="w-8 h-8 text-green-300" />
            </div>
            <span>
              Once you've completed the payment, you will receive the confirmation
              within 24 hours.
            </span>
          </div>
          <div className="flex gap-3 mt-5">
            <div>
              <ArrowLongRightIcon className="w-8 h-8 text-green-300" />
            </div>
            <span>
              Keep an eye out from an email from thecodedoseofficial@gmail.com
            </span>
          </div>
          <div className="flex gap-3 mt-5">
            <div>
              <ArrowLongRightIcon className="w-8 h-8 text-green-300" />
            </div>
            <span>
              For any enquiries, you can contact me via the same email.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-12 w-full text-xs mt-24">
          <a href="/react-cohort/privacy">
            <span className="text-white">
              Privacy Policy
            </span>
          </a>
          <a href="/react-cohort/tnc">
            <span className="text-white">
              Terms & Conditions
            </span>
          </a>
          <a href="/react-cohort/refund">
            <span className="text-white">
              Refund Policy
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReactCohortAcceptedPage;

export const pageQuery = graphql`
  query reactCohortAcceptedPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
