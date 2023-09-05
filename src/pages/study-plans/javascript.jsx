import React from "react";
import { Link } from "gatsby";
import thumbnail from "../../../static/assets/js-plan.png";
import withPadding from '../../hocs/withPadding';

const JavaScriptSection = () => {
  return (
    <section className="px-10 py-8 flex flex-col-reverse md:flex-row bg-blue border border-black rounded-2xl drop-shadow-solid">
      <img className="w-full md:w-1/2" src={thumbnail} />
      <div className="flex flex-col justify-center">
        <h1 className="text-outline text-white text-3xl md:text-4xl lg:text-6xl uppercase">
          21 days
          <br></br>
          <span className="text-pink">JAVASCRIPT</span>
          <br></br>Study Plan
        </h1>
        <h3 className="text-lg lg:text-xl">
          Become a JavaScript developer in 21 days!
        </h3>
        <p className="text-md lg:text-lg">
          This self study plan covers everything that you need to know to become
          a confident JavaScript developer!
        </p>
        <Link
          className="block my-4 text-center w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-8 py-4 bg-yellow text-black"
          to="https://tagmango.com/mangocheckout/644582e75c04157faec0d217"
        >
          I want this!
        </Link>
      </div>
    </section>
  )
};

export default withPadding(JavaScriptSection, 'js-plan');
