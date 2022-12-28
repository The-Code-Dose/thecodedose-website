import React from 'react';
import { Link } from 'gatsby';
import Button from './button';

import './postLink.scss';

const PostLink = ({
  post: {
    excerpt,
    frontmatter: {
      path, thumbnail, title, date, tags,
    },
  },
}) => (
  <article className="post-card">
    <Link to={path}>
      {!!thumbnail && (
        <img
          className="post-card__thumbnail"
          src={thumbnail}
          alt=""
        />
      )}
    </Link>
    <section className="post-card__content">
      <h2 className="post-card__title">
        <Link to={path} className="post-link">
          {title}
        </Link>
      </h2>
      <div className="post-meta">{date}</div>
      <p>{excerpt}</p>
      {/* <div className="post-card__tags">
        {tags.map(tag => (
          <Link to={`/tags/${tag}`} className="post-card__tag">{tag}</Link>
        ))}
      </div> */}
      <Button text="Read more" color="yellow" size="small" />
    </section>
  </article>
);

export default PostLink;
