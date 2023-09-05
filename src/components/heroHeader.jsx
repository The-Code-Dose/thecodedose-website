import React from 'react';
import { Link } from 'gatsby';
import withPadding from '../hocs/withPadding';

function HeroSection() {
  return (
    <div className="flex items-center justify-center mt-12">
      <div
        className="flex flex-col items-center"
      >
        <h1 className="uppercase drop-shadow-solid-white leading-tight text-5xl md:text-8xl 2xl:text-9xl text-center">
          Want to learn to
          <span className="bg-blue border-black border drop-shadow-solid-extend px-12 py-3 m-3 inline-block -rotate-3 rounded-full">
            code
          </span>?
        </h1>
        <p className="w-full md:w-3/4 text-center mt-8">
          Do you want to learn computer programming but don't know where to start? <br />
          This beginner's guide will help you find the best resources to start coding today.
        </p>
        <Link className="uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-8 py-4 mt-8 bg-pink" to="/blog/how-to-learn-coding">
          Start Here
        </Link>
      </div>
    </div>
  );
}

export default withPadding(HeroSection, 'hero', 'bg-yellow');
