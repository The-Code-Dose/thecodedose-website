import React from "react";
import withPadding from "../hocs/withPadding";
import { Link } from "gatsby";
import SocialLinks from "./socialLinks";
import Navigation from "./navigation";
import logo from "../images/logo.png";

const WrappedHeader = withPadding(
  () => (
    <header className="w-full flex justify-between items-center bg-purple px-10 py-3 rounded-full border border-black drop-shadow-solid">
      <Link to="/">
        <img className="w-8 m-0" src={logo} alt="Logo" />
      </Link>
      <Navigation />
    </header>
  ),
  "header",
  "fixed w-full top-0 z-20 py-3 md:py-3"
);

export default function ({ children }) {
  return (
    <div className="w-screen">
      <WrappedHeader />
      {children}
      <footer className="bg-black flex flex-col md:flex-row justify-between gap-10 px-10 py-10">
        <div className="p-10 rounded-2xl border border-black drop-shadow-solid flex flex-col gap-5 justify-between">
          <Link to="/">
            <img className="w-20" src={logo} alt="Logo" />
          </Link>
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
}
