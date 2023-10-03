import React from "react";
import { Link } from "gatsby";
import { LINKS } from "../../utils/constants/react-cohort/links";

export default function () {
  return (
    <nav className="z-10 font-light flex border-b border-indigo-900 fixed gap-5 top-0 w-full py-4 flex justify-center bg-radial-glass shadow-lg opacity-95 backdrop-blur-xl">
      {LINKS.map(({ label, link }) => (
        <Link className="text-cyan-300" to={link}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
