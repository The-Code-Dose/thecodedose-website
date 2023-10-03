import React from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "Self starters and Self learners",
    description: ``,
  },
  {
    title: "Discipline over motivation",
    description: `Our modern curriculum is specifically designed to equip you with the
    skills and knowledge needed to leverage the potential of Generative
    AI and take your productivity to new heights.`,
  },
  {
    title: "Patience",
    description: `This program encourages and teaches you to build in public to level up your
    visibility to potential recruiters and build credibility among your peers.`,
  },
  {
    title: "Striving to achieve excellence",
    description: `I believe that learning to code shouldn't be intimidating, nor
    boring. That's why I've built the curriculum designed to suit the
    modern learner.`,
  },
];

export default function () {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-cyan-300 mb-10 text-5xl">💎 Our Values</h1>
      <div className="inline-grid grid-cols-1 md:grid-cols-4 w-full gap-4">
        {SECTIONS.map(({ title, description }, index) => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-radial-glass rounded-md p-10 border border-indigo-700/30"
          >
            <h3 className="text-fuchsia-400 uppercase mb-5 mt-0">{title}</h3>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
