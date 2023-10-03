import React from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "Going deep into things",
    description: `We go beyond the surface-level tutorials and guide you through in-depth lessons that fill the gaps left by quick-and-dirty tutorials.`,
  },
  {
    title: "Smart Engineering with AI",
    description: `Our modern curriculum is specifically designed to equip you with the
    skills and knowledge needed to leverage the potential of Generative
    AI and use it smartly and not blindly.`,
  },
  {
    title: "Focus on building in public",
    description: `This program encourages and teaches you to build in public to level up your
    visibility to potential recruiters and build credibility among your peers.`,
  },
  {
    title: "Modern curriculum",
    description: `We believe that learning to code shouldn't be intimidating, nor
    boring. That's why our curriculum is designed to use a blend of modern learning techniques. No more boring lectures!`,
  },
  {
    title: "Open Source Contribution Guidance",
    description: `Learn how to get started with open source and make meaningful
    contributions to real world projects.`,
  },
  {
    title: "Engineering Mindset",
    description: ``,
  },
];

export default function () {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        How is this program different than others?
      </h1>
      <div className="inline-grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-10">
        {SECTIONS.map(({ title, description }, index) => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-radial-glass rounded-md p-10 border border-indigo-700/30"
          >
            <h3 className="text-cyan-300 uppercase mb-5 mt-0">{title}</h3>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
