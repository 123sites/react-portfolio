import React from "react";
import Logo from "../images/cfLogo.png";

// https://v1.tailwindcss.com/components/navigation

export default function Navbar({ handlePageChange, currentPage }) {
  console.log(currentPage);
  return (
    <nav className="flex items-center md:justify-between flex-wrap bg-stone-100 p-6 sticky top-0 font-extrabold tracking-wider">
      <div className="logo-wrapper">
        <div className="flex items-center flex-shrink-0 text-blueGray-900 mr-6">
          {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
          <div className="w-1/12 h-auto">
            <img src={Logo} alt="Logo with CF on a laptop screen."></img>
          </div>
          <div>
            <span className="font-semibold text-3xl tracking-wider text-orange-500">
              Chel Freitas
            </span>
          </div>
          <div className="block md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-blueGray border-teal-400 hover:text-gray hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:items-center md:w-auto cursor-pointer">
        <div className="text-lg md:flex-grow">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
            >
              About Me
            </a>
      
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
            >
              Portfolio
            </a>
         
            <a
              href="#ytc"
              onClick={() => handlePageChange("Ytc")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
            >
              My YouTube Channel
            </a>
    
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
            >
              Contact
            </a>

            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500  active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
            >
              Resume
            </a>

        </div>
      </div>
    </nav>
  );
}
