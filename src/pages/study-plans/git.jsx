import React from "react";
import { Link } from "gatsby";
import thumbnail from "../../../static/assets/git-plan.png";
import withPadding from "../../hocs/withPadding";

const GitSection = () => {
  return (
    <section className="px-10 py-16 flex flex-col-reverse md:flex-row bg-pink border border-black rounded-2xl drop-shadow-solid gap-10 items-center">
      <div className="w-full md:w-1/2">
        <h2 className="git-plan__heading">Git & GitHub Study Plan</h2>
        <h3 className="git-plan__subheading">
          Learn how to collaborate efficiently with other engineers!
        </h3>
        <p className="">
          This study plan is a Notion template that will make you comfortable
          with using Git and GitHub. After studying everything in this plan,
          you’ll be able to integrate Git and GitHub in your daily projects.
        </p>
        <Link
          className="block my-4 text-center w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-8 py-4 bg-black text-white"
          to="https://tagmango.com/mangocheckout/64396cd8a54f283500066b73"
        >
          I want this!
        </Link>
      </div>
      <img className="border border-black rounded-2xl drop-shadow-solid w-full md:w-1/2 h-auto block" src={thumbnail} />
    </section>
  );
};

export default withPadding(GitSection, "git-plan");
