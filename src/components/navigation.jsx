import React, { useState } from "react";
import { Link } from "gatsby";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  // {
  //   label: 'Resources',
  //   path: '/resources',
  // },
  {
    label: "Study Plans",
    path: "/study-plans",
  },
  {
    label: "Shop",
    path: "https://www.redbubble.com/people/thecodedose/shop",
  },
];

export default function () {
  const [openMenu, setOpenMenu] = useState(false);
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const linkElements = (
    <>
      {links.map(({ label, path }) => (
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`menu-item font-semibold rounded-full transition-all text-xs px-5 py-2 border uppercase hover:no-underline ${
                (currentPath.includes(path) && path !== "/") ||
                (currentPath === "/" && path === "/")
                  ? "bg-pink drop-shadow-solid border border-black hover:drop-shadow-solid-extend text-black"
                  : "text-white border-purple hover:border-white"
              } ${active ? "active" : ""} p-0 m-0`}
              to={path}
            >
              {label}
            </Link>
          )}
        </Menu.Item>
      ))}
    </>
  );

  return (
    <div className="menu-container flex justify-between items-center w-full">
      <Menu as="nav">
        <Transition show={openMenu}>
          <nav
            className={`fixed top-20 flex flex-col left-0 bg-purple w-full rounded-xl px-6 py-5 border ${
              openMenu ? "mt-3" : ""
            }`}
            style={{ maxWidth: "100%" }}
          >
            {linkElements}
          </nav>
        </Transition>
      </Menu>
      <button
        className="text-white uppercase font-bold outline-none"
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>
    </div>
  );
}
