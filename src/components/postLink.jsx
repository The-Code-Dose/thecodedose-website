import React from 'react';
import { Link } from 'gatsby';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import './postLink.scss';

function PostLink({
  post: {
    excerpt,
    frontmatter: {
      path, thumbnail, title, date,
    },
  },
}) {
  return (
    <article className="border border-black rounded-2xl gap-5 items-center p-8 drop-shadow-solid hover:scale-105 transition-all bg-white hover:bg-yellow">
      <Link className="flex flex-col gap-3 justify-between h-full hover:no-underline" to={path}>
        {!!thumbnail && (
        <img className="border border-black rounded-2xl drop-shadow-solid w-full" src={thumbnail} alt="" />
        )}
        <h2 className="text-lg mt-4">
          <Link to={path} className="">
            {title}
          </Link>
        </h2>
        <p className="text-sm font-normal">{excerpt}</p>
        <Link className="text-sm flex justify-between items-center uppercase hover:no-underline transition-all hover:scale-105 border-black border drop-shadow-solid rounded-full px-4 py-1 mt-2 bg-pink" to={path}>
          Read More
          <ArrowLongRightIcon className="w-10 h-10" />
        </Link>
      </Link>
    </article>
  );
}

export default PostLink;
