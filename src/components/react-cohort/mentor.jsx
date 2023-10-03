import React from "react";
import {
  ArrowRightCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import mentor from "../../images/mentor.png";
import outreachySelection from "../../images/outreachy_selection.png";
import remoteEngineer from "../../images/remote_engineer.png";

const BOTTOM_SECTION_POINTS = [
  `I graduated in 2020, yes in the beginning of COVID-19 when job
  offers were being revoked and companies were freezing hiring.`,
  `I somehow managed to get 2 full-time offers from off-campus
  placements and decided to join HackerRank as a Software
  Engineer.`,
  `After about 9 months, I left HackerRank to pursue a career as a remote
  engineer working with global companies to make a higher income.`,
  `I earned multiple lakhs in a month that allowed me to travel and work
  from anywhere!`,
  `And now I can’t wait to teach you how to do the same!`,
  `Since 2020, I have been sharing my learnings and journey on Instagram, YouTube and now on my blog, attempting to help others
  to code and build a career in tech.`,
  `I decided to start mentoring in the beginning of 2023, and launched this program.`,
];

export default () => {
  return (
    <div
      className="mx-10 pt-10 mt-32 md:px-12 react-cohort__mentor-container"
      id="mentor"
    >
      <h1 className="text-cyan-300 mb-10 text-5xl mt-0">Meet your mentor</h1>
      <div className="react-cohort__mentor">
        <img className="w-full" src={mentor}></img>
        <div className="m-auto md:px-10">
          <p className="mb-0">
            Hi, I am Urvashi and I’ve been writing React code since{" "}
            <span className="text-cyan-300 font-semibold">5+ years</span>. Even
            though I did my B.Tech in Computer Science, they never really taught
            us React or even JavaScript. I started learning React by myself in
            my second year of engineering and within a couple of months{" "}
            <span className="text-cyan-300 font-semibold">
              I got my first paid internship.
            </span>
          </p>
        </div>
      </div>
      <div className="lg:flex gap-5 text-lg">
        <div className="mt-16 lg:w-2/3">
          <div className="flex gap-5">
            <div>
              <ArrowRightCircleIcon className="w-8 h-8 text-green-300" />
            </div>
            <span className="w-11/12 self-center">
              But I knew I could do more so I started contributing to Open
              Source projects.
            </span>
          </div>
          <div className="flex mt-5 gap-5">
            <div>
              <ArrowRightCircleIcon className="w-8 h-8 text-green-300" />
            </div>
            <span className="self-center">
              Soon I came to know about this program called{" "}
              <span className="text-yellow font-semibold">Outreachy</span> and I
              made it my goal to get accepted!
            </span>
          </div>
          <div className="flex mt-5 gap-5">
            <div>
              <ArrowRightCircleIcon className="w-8 h-8 text-green-300" />
            </div>
            <span className="self-center">
              I was soon accepted as an intern in the summer of 2018 where I got
              to work with the{" "}
              <span className="text-yellow font-semibold">
                Wikimedia Foundation
              </span>{" "}
              and earned a stipend of{" "}
              <span className="text-yellow font-semibold">
                $5500 including a trip to Singapore!
              </span>
            </span>
          </div>
          <div className="flex mt-5 gap-5">
            <div>
              <ArrowRightCircleIcon className="w-8 h-8 text-green-300" />
            </div>
            <span className="self-center">
              After that I continued to do multiple internships and also
              participated in the{" "}
              <span className="text-yellow font-semibold">
                Google Summer of Code
              </span>{" "}
              the next summer and earned another{" "}
              <span className="text-yellow font-semibold">$2400</span>.
            </span>
          </div>
          <div className="flex mt-5 gap-5">
            <div>
              <ArrowRightCircleIcon className="w-8 h-8 text-green-300" />
            </div>
            <span className="self-center">
              In my final semester, I joined{" "}
              <span className="text-yellow font-semibold">HackerRank</span> as a
              Software Engineer intern and moved to Banglore.
            </span>
          </div>
        </div>
        <img
          className="mx-auto mt-10 self-center w-3/4 lg:w-1/3"
          src={outreachySelection}
        ></img>
      </div>
      <div className="lg:flex gap-5">
        <img
          className="mx-auto mt-10 self-center w-3/4 lg:w-1/3"
          src={remoteEngineer}
        ></img>
        <div className="lg:w-2/3 font-medium text-fuchsia-300 pt-5 md:pt-10">
          {BOTTOM_SECTION_POINTS.map((content) => {
            return (
              <div className="flex space-between gap-5 my-10">
                <div>
                  <PlusCircleIcon className="w-8 h-8 text-neutral-100" />
                </div>
                <span className="block leading-relaxed text-lg">{content}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
