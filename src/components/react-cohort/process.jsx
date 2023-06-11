import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  `You submit your initial application and book a call with me.`,
  `Your application is reviewed and you will be notified via email whether
  you're accepted.`,
  `Once you're accepted into the program, you'll be sent the payment link.`,
  `Program commences and you unlock your path to becoming a successful React Developer.`,
];

export default () => {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="process">
      <h1 className="text-fuchsia-400 text-5xl">How can you get in?</h1>
      <div className="text-xl mb-5 mt-5">
        {STEPS.map((step, i) => (
          <div className="my-10">
            <h3 className="inline-block text-yellow-300 text-3xl text-extrabold">
              {i + 1}.
            </h3>{" "}
            <span className="text-xl">{step}</span>
          </div>
        ))}
      </div>
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
    </div>
  );
};
