import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Ytc from "./pages/Ytc";
import Resume from "./pages/Resume";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);
  const changePage = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === "About") {
      return <About handlePageChange={handlePageChange} currentPage="about" />;
    }
    if (currentPage === "Portfolio") {
      return (
        <Portfolio
          handlePageChange={handlePageChange}
          currentPage="portfolio"
        />
      );
    }
    if (currentPage === "Footer") {
      return (
        <Footer handlePageChange={handlePageChange} currentPage="footer" />
      );
    }
    if (currentPage === "Resume") {
      return (
        <Resume handlePageChange={handlePageChange} currentPage="resume" />
      );
    }
    if (currentPage === "Ytc") {
      return <Ytc handlePageChange={handlePageChange} currentPage="ytc" />;
    }
    return (
      <Contact handlePageChange={handlePageChange} currentPage="contact" />
    );
  };

  return (
    <div>
      <Router>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* {renderPage()} */}
        <Routes>
          <Route
            path="/react-portfolio/portfolio"
            element={<Portfolio />}
          ></Route>
          <Route path="/react-portfolio/ytc" element={<Ytc />}></Route>
          <Route path="/react-portfolio/contact" element={<Contact />}></Route>
          <Route
            path="/*"
            element={
              <About handlePageChange={handlePageChange} currentPage="about" />
            }
          ></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
