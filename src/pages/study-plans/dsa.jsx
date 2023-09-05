import React from "react";
import { Link } from "gatsby";
import thumbnail from "../../../static/assets/90-day-dsa-plan.png";
import withPadding from "../../hocs/withPadding";

const DSASection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row bg-white border border-black rounded-2xl drop-shadow-solid gap-10 px-10 py-16 items-start">
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h1 className="px-8 py-4 m-0 border border-black rounded-2xl drop-shadow-solid bg-yellow">
          90 Days Data Structures & Algorithms Study Plan
        </h1>
        <h3 className="text-xl">
          Become interview ready in just 90 days!
        </h3>
        <div>
          <p className="text-lg">
            This study plan will make you proficient in Data Structures and
            Algorithms (in 90 days if you wish to take the challenge). The goal
            is to make you feel confident for technical interviews as well as
            equip you with the right skills to approach problems.
          </p>
          <Link
            className="block my-4 text-center w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-8 py-4 bg-blue text-black"
            to="https://tagmango.com/mangocheckout/642074a1131c482eadabe331"
          >
            I want this!
          </Link>
        </div>
      </div>
      <img className="w-full md:w-1/2 border border-black rounded-2xl drop-shadow-solid" src={thumbnail} />
    </section>
  );
};

export default withPadding(DSASection, "dsa-plan");
