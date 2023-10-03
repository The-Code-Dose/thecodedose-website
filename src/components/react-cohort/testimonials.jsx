import React from "react";
import { motion } from "framer-motion";
import { UserCircleIcon, CheckIcon } from "@heroicons/react/24/outline";
import { TESTIMONIALS } from "../../utils/constants/react-cohort/testimonals";

export default function () {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        What my mentees are saying:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
        {TESTIMONIALS.map(({ name, feedback, info }) => (
          <div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-radial-glass p-8 border border-indigo-700/30 rounded-md"
          >
            <div className="text-cyan-300 my-5 flex gap-3">
              <UserCircleIcon className="w-12 h-12" />
              <div>
                <h4 className="m-0">{name}</h4>
                <span className="text-neutral-400 text-xs">{info}</span>
              </div>
            </div>
            <p className="text-sm text-neutral-300">{feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
