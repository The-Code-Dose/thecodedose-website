import React from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    title: "Self Learning",
    description: `We encourage proactive learning, helping you to take charge of your own educational journey. It's not just about what we teach, it's about what you seek to learn.`,
  },
  {
    title: "Discipline over motivation",
    description: `Motivation can be fleeting, but discipline ensures you stay the course. We instill a disciplined approach to help you achieve your long-term goals.`,
  },
  {
    title: "Patience",
    description: `Rome wasn't built in a day. Quality learning requires time and patience. We expect you to commit to the process and respect the time it takes to master new skills.`,
  },
  {
    title: "Striving for excellence",
    description: `We don't settle for mediocrity, and neither should you. Every task, no matter how small, is an opportunity to excel. Strive for excellence in all you do.`,
  },
];

export default function () {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="eligibility">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">💎 Our Values</h1>
      <p className="text-md mb-10">
        Embarking on this program is not just about learning new skills but also
        about adopting a mindset that leads to success. Below are the core
        values that will guide you throughout your journey with us.
      </p>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 mt-10">
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
