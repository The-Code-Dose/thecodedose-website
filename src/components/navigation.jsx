import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { LINKS } from "../utils/constants/links.js";

export default function () {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const linkElements = (
    <>
      {LINKS.map(({ label, path }) => (
        <Link
          key={path}
          className={`menu-item font-semibold rounded-full transition-all text-xs px-5 py-2 border uppercase hover:no-underline ${
            (currentPath.includes(path) && path !== "/") ||
            (currentPath === "/" && path === "/")
              ? "bg-pink drop-shadow-solid border border-black hover:drop-shadow-solid-extend text-black"
              : "text-white border-purple hover:border-white"
          }`}
          to={path}
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <div>
      <nav className="leading-normal hidden md:flex gap-4 lg:gap-6 justify-around items-center">
        {linkElements}
      </nav>

      <Menu as="nav" className="md:hidden flex self-center">
        <Menu.Button className="text-white uppercase font-bold outline-none md:hidden">
          <Bars3Icon className="w-6 h-6" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`fixed top-20 flex flex-col left-0 bg-purple w-full rounded-xl px-6 py-5 border gap-1`}
          >
            {linkElements}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
