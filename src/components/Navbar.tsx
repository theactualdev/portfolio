"use client";

import { NavItems } from "@/data/Navbar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nickname = "< />";
  return (
    <nav className="px-4 lg:px-8 w-full bg-white sm:px-6 items-center flex-col flex justify-between">
      <div className="flex items-center w-full h-20 justify-between">
        <div className="logo relative w-fit font-semibold uppercase text-2xl">
          <div className="flex gap-2 items-center">
            <span> {nickname} </span>
            <p>Ayodele Olayinka</p>
          </div>
          <span className="text-sm lowercase absolute right-0">
            theactualdev
          </span>
        </div>

        <ul className="hidden md:flex gap-20">
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <button
                  aria-label={item}
                  className="uppercase text-2xl font-light hover:text-blue-500 transition-colors"
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden ">
          <button
            aria-label="Hamburger Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg w-screen`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1">
          {NavItems.map((item, index) => (
            <li key={index}>
              <button
                aria-label={item}
                className="block px-3 py-2 text-sm hover:text-blue-500 transition-colors"
                //   onClick={() => scrollToSection(id)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
