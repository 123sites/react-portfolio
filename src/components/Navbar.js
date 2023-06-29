// import React from "react";
import React, { useState } from "react";
import Logo from "../images/cfLogo.png";
import resume from "../images/resume.pdf";

// https://v1.tailwindcss.com/components/navigation#app

export default function Navbar({ handlePageChange, currentPage }) {
  console.log(currentPage);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between flex-wrap sticky top-0 bg-stone-100 p-3">
      <div className="flex items-center flex-shrink-0 text-stone-100 mr-6">
        <div className="flex flex-nowrap items-center pr-3 h-auto">
          {" "}
          <a href="#About" onClick={() => handlePageChange("About")}>
            <img
              className="w-20"
              src={Logo}
              alt="Logo with CF on a laptop screen."
            ></img>
          </a>
          {/* <span className="flex flex-wrap:nowrap text-2xl sm:text-4xl font-extrabold tracking-wider text-orange-500"> */}
          <a
            href="#About"
            className="text-2xl sm:text-4xl font-extrabold tracking-wider text-orange-500"
            onClick={() => handlePageChange("About")}
          >
            Chel Freitas
          </a>
          {/* </span> */}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center px-3 py-2 border text-orange-500 border-orange-500 p-2 lg:hidden"
        >
          <svg
            className="fill-current h-6 w-6 mr-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full sm:block ${
          isMenuOpen ? "" : "hidden"
        } flex-grow text-right lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            className="block mt-3 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:p-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            About Me
          </a>
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className="block mt-3 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:p-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            Portfolio
          </a>
          <a
            href="#My_YouTube"
            onClick={() => handlePageChange("Ytc")}
            className="block mt-3 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:p-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            My YouTube
          </a>
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className="block mt-3 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:p-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            Contact
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:p-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
