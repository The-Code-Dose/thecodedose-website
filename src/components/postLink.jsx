import React from 'react';
import { Link } from 'gatsby';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

function PostLink({
  post: {
    excerpt,
    frontmatter: {
      path, thumbnail, title, date,
    },
  },
  showExcerpt,
  direction = 'row',
}) {
  return (
    <article className="border border-black rounded-2xl gap-5 items-center p-8 drop-shadow-solid hover:scale-105 transition-all bg-white hover:bg-yellow">
      <Link to={path} className='h-full flex flex-col justify-between'>
        <div className={`
          flex
          ${direction === 'row' ? 'flex-col md:flex-row md:items-center' : 'flex-col'}
          gap-3 hover:no-underline
        `} >
          {!!thumbnail && (
          <img className={`
            border border-black rounded-2xl drop-shadow-solid
            ${direction === 'row' ? 'w-full md:w-1/4 md:h-auto' : 'w-full'}
          `} src={thumbnail} alt="" />
          )}
          <div>
            <h2 className="text-lg mb-4 mt-0 ">
              <Link to={path} className="">
                {title}
              </Link>
            </h2>
            {showExcerpt && <p className="text-sm font-normal">{excerpt}</p>}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PostLink;
