import React from 'react';
import { Link } from 'gatsby';

import './postLink.scss';

const PostLink = ({
  post: {
    frontmatter: {
      path, thumbnail, title, date, tags,
    },
  },
}) => (
  <article className="card ">
    <Link to={path}>
      {!!thumbnail && (
        <img
          className="post__featured-shot"
          src={thumbnail}
          alt=""
        />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={path} className="post-link">
          {title}
        </Link>
      </h2>
      <div className="post-meta">{date}</div>
      <div className="post__tags">
        {tags.map(tag => (
          <Link to={`/tags/${tag}`} className="post__tag">{tag}</Link>
        ))}
      </div>
    </header>
  </article>
);
export default PostLink;
