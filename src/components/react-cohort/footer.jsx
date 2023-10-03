import React from "react";
import { Link } from "gatsby";

const FOOTER_LINKS = [
  {
    label: "Contact",
    link: "contact",
  },
  {
    label: "Privacy Policy",
    link: "privacy",
  },
  {
    label: "Terms & Conditions",
    link: "tnc",
  },
  {
    label: "Refund Policy",
    link: "refund",
  },
];

export default function () {
  return (
    <div className="border-t border-indigo-900 bg-radial-glass w-full mt-32 py-5 text-center">
      <a
        className="text-xs text-neutral-400 hover:text-fuchsia-400"
        href="https://github.com/The-Code-Dose/thecodedose-website"
        target="_blank"
      >
        Made with React &#x2764;
      </a>
      <nav className="font-light flex flex-col md:flex-row mt-3 gap-5 justify-center shadow-lg">
        {FOOTER_LINKS.map(({ label, link }) => (
          <Link
            className="text-white hover:text-fuchsia-400"
            to={`/react-cohort/${link}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
