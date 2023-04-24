import React from "react";
import { Link } from "gatsby";
import Button from "./button";

import "./postLink.scss";

const PostLink = ({
  post: {
    excerpt,
    frontmatter: { path, thumbnail, title, date, tags },
  },
}) => (
  <article className="post-card">
    <Link to={path}>
      {!!thumbnail && (
        <img className="post-card__thumbnail" src={thumbnail} alt="" />
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
      <Button text="Read more" color="yellow" size="small" link to={path} />
    </section>
  </article>
);

export default PostLink;
