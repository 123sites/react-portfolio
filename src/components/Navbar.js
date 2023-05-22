import React from "react";
import Logo from "../images/cfLogo.png";
// import PortfolioContainer from './PortfolioContainer';
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

// https://v1.tailwindcss.com/components/navigation

export default function Navbar({ handlePageChange, currentPage }) {
  console.log(currentPage);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-stone-100 p-6 sticky top-0 font-extrabold tracking-wider">
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
          <div className="block lg:hidden">
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
      <div className="w-full blockn lg:flex lg:items-center lg:w-auto cursor-pointer">
        <div className="text-lg lg:flex-grow">
          {currentPage !== "Home" && (
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className="block mt-4 lg:inline-block lg:mt-0 text-blueGray nav-link mr-5"
            >
              Home
            </a>
          )}
          {currentPage !== "About" && (
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className="block mt-4 lg:inline-block lg:mt-0 text-blueGray nav-link mr-5"
            >
              About Me
            </a>
          )}
          {currentPage !== "Portfolio" && (
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className="block mt-4 lg:inline-block lg:mt-0 text-blueGray nav-link mr-5"
            >
              Portfolio
            </a>
          )}
          {currentPage !== "Ytc" && (
            <a
              href="#ytc"
              onClick={() => handlePageChange("Ytc")}
              className="block mt-4 lg:inline-block lg:mt-0 text-blueGray nav-link mr-5"
            >
              My YouTube Channel
            </a>
          )}
          {currentPage !== "Contact" && (
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className="block mt-4 lg:inline-block lg:mt-0 text-blueGray nav-link mr-5"
            >
              Contact
            </a>
          )}
          {currentPage !== "Resume" && (
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className="block mt-4 lg:inline-block lg:mt-0 text-blueGray nav-link mr-5"
            >
              Resume
            </a>
          )}
        </div>
        {/* <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div> */}
      </div>
    </nav>
  );
}

// function Navbar({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}

//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}

//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#ytc"
//           onClick={() => handlePageChange('Ytc')}

//           className={currentPage === 'Ytc' ? 'nav-link active' : 'nav-link'}
//         >
//           Video
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}

//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           onClick={() => handlePageChange('Resume')}

//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"

//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }
