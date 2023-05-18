import React, {useState} from 'react';
import Navbar from './Navbar';
// import tailwind.css from 'tailwind.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Ytc from './pages/Ytc';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  const changePage = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handlePageChange = {handlePageChange} currentPage='home' />;
    }
    if (currentPage === 'About') {
      return <About handlePageChange = {handlePageChange} currentPage='about'/>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio handlePageChange = {handlePageChange} currentPage='portfolio'/>;
    }
    if (currentPage === 'Footer') {
      return <Footer handlePageChange = {handlePageChange} currentPage='footer'/>;
    }
    if (currentPage === 'Resume') {
      return <Resume handlePageChange = {handlePageChange} currentPage='resume'/>;
    }
    if (currentPage === 'Ytc') {
      return <Ytc handlePageChange = {handlePageChange} currentPage='ytc'/>;
    }
    return <Contact handlePageChange = {handlePageChange} currentPage='contact'/>;
  };

  return (
    <div>

      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <Footer />
    </div>
  );
}
