import React from 'react';
import { Link } from 'gatsby';
import withPadding from '../hocs/withPadding';
import Video from '../images/youtube.mp4';

function YouTubeSection() {
  return (
      <div className="bg-red px-10 py-16 border border-black rounded-2xl drop-shadow-solid flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex gap-5 flex-col justify-between">
          <h2 className="text-4xl md:text-6xl text-white text-outline 2xl:text-8xl">
            Check us out on YouTube
          </h2>
          <p>
            Understand computer science concepts with hand-drawn animations.
          </p>
          <Link
            className="text-center w-fit uppercase hover:no-underline transition-all hover:scale-105 border-black border rounded-full px-8 py-4 bg-black text-white"
            to="https://www.youtube.com/channel/thecodedose"
          >
            Open YouTube
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <video autoPlay muted loop className="w-full border-black rounded-2xl drop-shadow-solid">
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
  );
}

export default withPadding(YouTubeSection, 'youtube', 'bg-yellow');
