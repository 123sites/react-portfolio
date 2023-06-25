import React from "react";
import Logo from "../images/cfLogo.png";

// https://www.material-tailwind.com/docs/react/navbar
// https://reactjsexample.com/a-navbar-with-context-app-built-with-react-js/

export default function Navbar({ handlePageChange, currentPage }) {
  console.log(currentPage);
  return (
    <nav className="flex items-center md:justify-between flex-wrap bg-stone-100 p-6 sticky top-0 font-extrabold tracking-wider">
      <div className="logo-wrapper">
        <div className="flex items-center flex-shrink-0 text-blueGray-900 mr-6">
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

// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// function NavList() {
//   return (
//     <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           About Me
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Portfolio
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           My YouTube Channel
//         </a>
//       </Typography>
//       <Typography
//         as="li"
//         variant="small"
//         color="blue-gray"
//         className="p-1 font-medium"
//       >
//         <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
//           Contact
//         </a>
//       </Typography>
//     </ul>
//   );
// }

// export default function Example() {
//   const [openNav, setOpenNav] = React.useState(false);

//   const handleWindowResize = () =>
//     window.innerWidth >= 960 && setOpenNav(false);

//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//       </Collapse>
//     </Navbar>
//   );
// }
