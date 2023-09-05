import React from "react";
import { Link } from "gatsby";
import thumbnail from "../../../static/assets/python_study_plan.png";
import withPadding from "../../hocs/withPadding";

const PythonSection = () => {
  return (
    <section className="px-10 py-16 flex flex-col-reverse md:flex-row bg-yellow border border-black rounded-2xl drop-shadow-solid">
      <div className="">
        <div className="px-4 md:px-12 py-6 md:py-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl">20 Days Python Study Plan</h1>
          <h3 className="text-lg lg:text-xl">
            Master Python in just 20 days!
          </h3>
        </div>
        <div className='py-6 flex flex-col md:flex-row gap-10'>
          <img className="w-full md:w-1/3 border border-black rounded-2xl drop-shadow-solid" src={thumbnail} />
          <div>
            <p className="text-md lg:text-lg">
              This study plan is tailored to help you learn Python in just 20
              days, and will equip you with all the foundational knowledge and
              practical skills you need to succeed. By the end of this plan,
              you'll be proficient in Python and ready to explore advanced topics
              like Data Science, Machine Learning, and more.
            </p>
            <Link
              className="block my-4 text-center w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-8 py-4 bg-blue text-black"
              to="https://tagmango.com/mangocheckout/645252622f1421f67c1fba99"
            >
              I want this!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withPadding(PythonSection, "python-plan");
