import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import './socialLinks.scss';

export default function () {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            instagram
            twitter
            redbubble
            github
            discord
            youtube
          }
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: {
        social: {
          instagram, redbubble, twitter, github, discord, youtube,
        },
      },
    },
  } = data;

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full md:w-1/2 bg-blue  p-10 rounded-2xl border border-black drop-shadow-solid">
      <div className="flex text-xs md:text-right flex-col justify-between  w-full md:w-1/2">
        <Link className="text-black" to="/">Home</Link>
        <Link className="text-black" to="/blog">Blog</Link>
        <Link className="text-black" to="/travel">Travel</Link>
        <Link className="text-black" to="/cs-illustrated">CS Illustrated</Link>
        <Link className="text-black" to="https://forms.gle/KVFTHZYj3dXnanRV9">
          Apply for next React Cohort
        </Link>
        <a className="text-black" href={redbubble} target="__blank">
          Shop
        </a>
      </div>
      <div className="flex flex-col justify-between text-xs md:text-right w-full md:w-1/2">
        <a className="text-black" href={instagram} target="__blank">
          Instagram
        </a>
        <a className="text-black" href={discord} target="__blank">
          Discord
        </a>
        <a className="text-black" href={twitter} target="__blank">
          Twitter
        </a>
        <a className="text-black" href={youtube} target="__blank">
          YouTube
        </a>
        <a className="text-black" href={github} target="__blank">
          Github
        </a>
      </div>
    </div>
  );
}
