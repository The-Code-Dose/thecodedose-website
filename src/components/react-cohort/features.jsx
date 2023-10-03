import React from "react";
import { motion } from "framer-motion";

import chatIcon from "../../images/chat_icon.png";
import mentoringIcon from "../../images/mentoring_icon.png";
import exerciseIcon from "../../images/exercise_icon.png";
import projectIcon from "../../images/project_icon.png";
import communityIcon from "../../images/community_icon.png";
import accessIcon from "../../images/access_icon.png";
import doubtsIcon from "../../images/doubts_icon.png";
import sessionsIcon from "../../images/sessions_icon.png";

const SECTIONS = [
  {
    title: "Knowledge on demand",
    description: `Weekly pre-recorded videos that you can watch at your convenience`,
    icon: sessionsIcon,
  },
  {
    title: "Weekly LIVE Sessions",
    description: `Doubt sessions and hands-on workshops every week`,
    icon: doubtsIcon,
  },
  {
    title: "Daily chat support",
    description: `Daily chat support available on our Discord channel`,
    icon: chatIcon,
  },
  {
    title: "Tight Knit developer community",
    description: `Lifetime access to a community of like-minded developers`,
    icon: communityIcon,
  },
  {
    title: "1 year access to all course content",
    description: `All course content will be available to you even after the program
    ends`,
    icon: accessIcon,
  },
  {
    title: "Weekly practice exercises",
    description: `Every topic has dedicated code exercises that challenge you`,
    icon: exerciseIcon,
  },
  {
    title: "Project focused learning",
    description: `Learn how to build projects from scratch by yourself. No more tutorial hell!`,
    icon: projectIcon,
  },
  {
    title: "1:1 Mentorship Available",
    description: `Gain individualized guidance, feedback, and support tailored to your
    needs`,
    icon: mentoringIcon,
  },
];

export default function () {
  return (
    <div id="program-details" className="mt-32 mx-10 md:mx-16">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        What's included in the program?
      </h1>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {SECTIONS.map(({ title, icon, description }, index) => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="p-10 rounded-md border border-indigo-700/30 bg-radial-glass"
          >
            <img className="w-20 h-20" src={icon} />
            <h4 className="text-cyan-300 uppercase my-5">{title}</h4>
            <p>{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
