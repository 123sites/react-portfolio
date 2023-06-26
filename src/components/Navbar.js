import React from "react";
import Logo from "../images/cfLogo.png";
import resume from "../images/resume.pdf";

// https://v1.tailwindcss.com/components/navigation#app

export default function Navbar({ handlePageChange, currentPage }) {
  console.log(currentPage);
  return (
    <nav class="flex items-center justify-between flex-wrap bg-stone-100 p-3">
      <div class="flex items-center flex-shrink-0 text-stone-100 mr-6">
        <div class="block lg:hidden">
          <button class="flex items-center bolder rounded text-orange-500 border-orange-500 hover:bg-blue-800 hover:text-stone-100">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-1/12 h-auto">
          {" "}
          <a
            href="#responsive-header"
            onClick={() => handlePageChange("About")}
          >
            <img src={Logo} alt="Logo with CF on a laptop screen."></img>
          </a>
        </div>
        <div>
          <span className="text-4xl font-extrabold tracking-wider text-orange-500">
            <a
              href="#responsive-header"
              onClick={() => handlePageChange("About")}
            >
              Chel Freitas
            </a>
          </span>
        </div>
      </div>

      <div class="w-full block flex-grow md:text-right lg:flex lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#About"
            onClick={() => handlePageChange("About")}
            class="block mt-4 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:px-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            About Me
          </a>
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            class="block mt-4 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:px-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            Portfolio
          </a>
          <a
            href="#My_YouTube"
            onClick={() => handlePageChange("Ytc")}
            class="block mt-4 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:px-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            My YouTube
          </a>
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            class="block mt-4 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:px-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
          >
            Contact
          </a>
          <a
            href={resume}
            target="_blank"
            class="block mt-4 lg:inline-block lg:mt-0 tracking-wider text-center font-extrabold md:px-2 text-base text-orange-500 rounded hover:bg-orange-500 hover:text-stone-100"
            // class="inline-block px-4 py-2 leading-none tracking-wider border rounded text-stone-100 text-base font-extrabold border-blue-800 bg-blue-800 hover:border-transparent  hover:bg-blue-800 hover:text-stone-100 mt-4 lg:mt-0"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

//     <nav className="flex items-center md:justify-between flex-wrap bg-stone-100 p-6 sticky top-0 font-extrabold tracking-wider">
//       <div className="logo-wrapper">
//         <div className="flex items-center flex-shrink-0 text-blueGray-900 mr-6">
//           <div className="w-1/12 h-auto">
//             <img src={Logo} alt="Logo with CF on a laptop screen."></img>
//           </div>
//           <div>
//             <span className="font-semibold text-3xl tracking-wider text-orange-500">
//               Chel Freitas
//             </span>
//           </div>
//           <div className="block md:hidden">
//             <button className="flex items-center px-3 py-2 border rounded text-blueGray border-teal-400 hover:text-gray hover:border-white">
//               <svg
//                 className="fill-current h-3 w-3"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>Menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:items-center md:w-auto cursor-pointer">
//         <div className="text-lg md:flex-grow">
//           <a
//             href="#about"
//             onClick={() => handlePageChange("About")}
//             className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
//           >
//             About Me
//           </a>

//           <a
//             href="#portfolio"
//             onClick={() => handlePageChange("Portfolio")}
//             className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
//           >
//             Portfolio
//           </a>

//           <a
//             href="#ytc"
//             onClick={() => handlePageChange("Ytc")}
//             className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
//           >
//             My YouTube Channel
//           </a>

//           <a
//             href="#contact"
//             onClick={() => handlePageChange("Contact")}
//             className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
//           >
//             Contact
//           </a>

//           <a
//             href="#resume"
//             onClick={() => handlePageChange("Resume")}
//             className="block mt-4 md:inline-block md:mt-0 text-blueGray nav-link mr-5 text-orange-500  active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-800 p-3"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }
