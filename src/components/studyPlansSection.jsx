import React from 'react';
import { Link } from 'gatsby';
import withPadding from '../hocs/withPadding';
import demo from '../../static/assets/study-plans-demo.png';

function StudyPlansSection() {
  return (
    <div className="text-white flex flex-col items-center">
      <h1 className="text-yellow text-6xl md:text-7xl uppercase text-center">
        Study Plans
      </h1>
      <p className="text-white my-5 text-center">
        Transform Your Learning Journey with Our Study Plans
      </p>
      <img className="w-full md:w-3/4 rounded-2xl my-5" src={demo} alt="demo" />
      <Link
        className="uppercase hover:no-underline transition-all hover:drop-shadow-solid-extend border-black border drop-shadow-solid rounded-full px-8 py-4 mt-8 bg-blue inline-block transition-all hover:scale-105"
        to="/study-plans"
      >
        Explore
      </Link>
    </div>
  );
}

export default withPadding(StudyPlansSection, 'study-plans', 'bg-black');
