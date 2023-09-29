import React from "react";
import { motion } from "framer-motion";

import chatIcon from "../../images/chat_icon.png";
import mentoringIcon from "../../images/mentoring_icon.png";
import placementIcon from "../../images/placement_icon.png";
import projectIcon from "../../images/project_icon.png";
import communityIcon from "../../images/community_icon.png";
import accessIcon from "../../images/access_icon.png";
import doubtsIcon from "../../images/doubts_icon.png";
import sessionsIcon from "../../images/sessions_icon.png";


export default function () {
  return (
    <div id="program-details" className="mt-32 mx-10 md:mx-16">
      <h1 className="text-fuchsia-400 mb-10 text-5xl">
        What's included in the program?
      </h1>
      <div className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.05 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={sessionsIcon} />
          <h4 className="text-cyan-300 uppercase my-5">Knowledge on demand</h4>
          <p>Pre-recorded videos that you can take at your convenience</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={doubtsIcon} />
          <h4 className="text-cyan-300 uppercase my-5">Weekly LIVE Sessions</h4>
          <p>
            Doubt sessions and hands-on workshops every week
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={chatIcon} />
          <h4 className="text-cyan-300 uppercase my-5">Daily chat support</h4>
          <p>Daily chat support available on our Discord channel</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={communityIcon} />
          <h4 className="text-cyan-300 uppercase my-5">
            Tight Knit developer community
          </h4>
          <p>Access to a community of like-minded developers</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={accessIcon} />
          <h4 className="text-cyan-300 uppercase my-5">
            1 year access to all course content
          </h4>
          <p>
            All course content will be available to you even after the program
            ends
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={placementIcon} />
          <h4 className="text-cyan-300 uppercase my-5">
            Placement Sessions
          </h4>
          <p>
            I will offer extended support until you get your first paying-gig,
            with no extra cost!
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={projectIcon} />
          <h4 className="text-cyan-300 uppercase my-5">
            Project focused learning
          </h4>
          <p>Helping you build projects that stand out to recruiters</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 p-10 border border-slate-500"
        >
          <img className="lg:w-1/2" src={mentoringIcon} />
          <h4 className="text-cyan-300 uppercase my-5">1:1 Mentoring</h4>
          <p>
            Top performers will get 1:1 mentoring sessions with me
          </p>
        </motion.div>
      </div>
    </div>
  );
}
