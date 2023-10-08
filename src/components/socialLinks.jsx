import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { LINKS } from "../utils/constants/links.js";

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
        social: { instagram, twitter, github, discord, youtube },
      },
    },
  } = data;

  const social = [
    {
      label: "Instagram",
      path: instagram,
    },
    {
      label: "Discord",
      path: discord,
    },
    {
      label: "Twitter",
      path: twitter,
    },
    {
      label: "YouTube",
      path: youtube,
    },
    {
      label: "GitHub",
      path: github,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full md:w-1/2  p-10 rounded-2xl border border-black drop-shadow-solid">
      <div className="flex text-xs md:text-right flex-col justify-between gap-5 w-full md:w-1/2 ">
        {LINKS.map(({ path, label }) => (
          <Link className="text-white" to={path}>
            {label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-between text-xs md:text-right gap-5  w-full md:w-1/2">
        {social.map(({ path, label }) => (
          <a className="text-white" href={path} target="__blank">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
