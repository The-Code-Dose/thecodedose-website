import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

const ELIGIBLE = [
  `You have basic understanding of HTML, CSS & JavaScript.`,
  `You want to become a React developer.`,
  `You are ambitious and want to start making money with your
  skills.`,
  `You have the grit and determination to put your all in for the
  next 4 months.`,
];

const NOT_ELIGIBLE = [
  `You already have a full-time job and are looking for a switch.`,
  `You are a complete beginner to programming.`,
  `You are not interested in frontend development.`,
  `You cannot spend 15-20 hours every week for the next 4 months.`,
];

export default () => {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        Who is this program made for?
      </h1>
      <p className="w-full lg:w-3/4">
        In order to maximize the impact of our first cohort, I will be working
        closely on a{" "}
        <span className="text-fuchsia-300 font-semibold">1:1 basis</span>. As a
        result, I will only be able to select a limited number of individuals
        who possess the right mindset and drive to make the most of this
        opportunity. If you are ready to take your skills to the next level and
        are{" "}
        <span className="text-fuchsia-300 font-semibold">
          committed to achieving outstanding
        </span>{" "}
        results, apply now to secure your spot in this exclusive program.
      </p>
      <div className="inline-grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div className="lg:pr-10 py-14 lg:border-r border-slate-700">
          <h4 className="text-cyan-300 mb-10 text-3xl">
            Apply <span className="animate-pulse text-yellow-200">*ONLY*</span>{" "}
            if this sounds like you:
          </h4>
          <p>
            <ul>
              {ELIGIBLE.map((rule) => (
                <div className="flex mt-5 gap-3">
                  <div>
                    <CheckIcon class="h-8 w-8 text-green-300" />
                  </div>
                  <span>{rule}</span>
                </div>
              ))}
            </ul>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://forms.gle/EdwzEjpBd3UZNBeQ6"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="block mt-12 text-lg px-6 py-3  border border-slate-500 uppercase font-bold bg-cyan-300 text-slate-900"
              >
                Start application
              </motion.button>
            </a>
          </p>
        </div>
        <div className="lg:pl-10 py-14">
          <h4 className="text-cyan-300 mb-10 text-3xl">
            This is <span className="animate-pulse text-yellow-200">*NOT*</span>{" "}
            for you if:
          </h4>
          <p>
            <ul>
              {NOT_ELIGIBLE.map((rule) => (
                <div className="flex mt-5 gap-3">
                  <div>
                    <XMarkIcon class="h-8 w-8 text-red-300" />
                  </div>
                  <span>{rule}</span>
                </div>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
