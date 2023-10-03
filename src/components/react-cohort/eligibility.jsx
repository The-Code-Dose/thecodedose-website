import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

const ELIGIBLE = [
  "You are comfortable with HTML, CSS & JavaScript.",
  `You want to learn frontend development under the guidance of a mentor.`,
  "You want to get started with contributing to open source.",
  `You have the grit and determination to put your all in for the
  next 4 months.`,
];

const NOT_ELIGIBLE = [
  "You already know frontend development.",
  "You are a complete beginner to programming.",
  "You are not comfortable with HTML, CSS & JavaScript.",
  "You cannot spend 15-20 hours every week for the next 4 months.",
];

export default function () {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        📌 Who is this program made for?
      </h1>
      <p className="w-full lg:w-3/4">
        If you are ready to take your skills to the next level and are committed
        to achieving outstanding results, apply now to secure your spot in this
        program.
      </p>
      <div className="inline-grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 bg-radial-glass border border-indigo-700/30 rounded-lg py-3 md:py-5 px-5 md:px-10">
        <div className="lg:pr-10 md:py-14 lg:border-r border-indigo-900">
          <h4 className="text-indigo-100 mb-10 text-3xl">
            Apply <span className="animate-pulse text-fuchsia-400">*ONLY*</span> if
            this sounds like you:
          </h4>
          <p>
            <ul>
              {ELIGIBLE.map((rule) => (
                <div className="flex mt-5 gap-3">
                  <div>
                    <CheckIcon class="h-8 w-8 text-emerald-300" />
                  </div>
                  <span className="text-lg">{rule}</span>
                </div>
              ))}
            </ul>
            <a
              className="cursor-pointer"
              target="_blank"
              href="https://forms.gle/CwSveJPJe3YKptxZ7"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="block mt-12 text-lg px-6 py-3 uppercase font-bold bg-cyan-300 text-neutral-900"
              >
                Join the waitlist
              </motion.button>
            </a>
          </p>
        </div>
        <div className="lg:pl-10 py-14">
          <h4 className="text-indigo-100 mb-10 text-3xl">
            This is <span className="animate-pulse text-fuchsia-400">*NOT*</span> for
            you if:
          </h4>
          <p>
            <ul>
              {NOT_ELIGIBLE.map((rule) => (
                <div className="flex mt-5 gap-3">
                  <div>
                    <XMarkIcon class="h-8 w-8 text-orange-300" />
                  </div>
                  <span className="text-lg">{rule}</span>
                </div>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
