import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ projectSectionRef }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const handleProjectsClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false); // Close the menu if opened
    if (location.pathname === '/home') {
      if (projectSectionRef.current) {
        projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { replace: true });
      setTimeout(() => {
        if (projectSectionRef.current) {
          projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <p className="nav-title">Rishu Raj</p>
        </a>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a
              href="/project"
              className="nav-link"
              onClick={handleProjectsClick}
            >
              Project
            </a>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
