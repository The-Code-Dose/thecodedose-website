import React from "react";
import { motion } from "framer-motion";

export default () => {
  return (
    <div className="mx-10 md:mx-16 mt-32" id="process">
      <h1 className="text-fuchsia-400 text-5xl">Are you interested?</h1>
      <div className="mt-10">
        <p>
          Fill the application form to take your first step towards your future.
        </p>
        <a
          className="cursor-pointer"
          target="blank"
          href="https://forms.gle/EdwzEjpBd3UZNBeQ6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="block mt-12 text-lg px-6 py-3  border border-neutral-500 uppercase font-bold bg-cyan-300 text-neutral-900"
          >
            Start application
          </motion.button>
        </a>
      </div>
    </div>
  );
};
