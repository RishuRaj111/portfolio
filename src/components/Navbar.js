import React from 'react';
import './Navbar.css'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ projectSectionRef }) => {
  const location = useLocation(); // To get the current location
  const navigate = useNavigate(); // To programmatically navigate

  const handleProjectsClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    
    if (location.pathname === '/home') {
      // If already on /home, scroll smoothly to the project section
      if (projectSectionRef.current) {
        projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        console.log("Scrolling to project section..."); // Debugging line
      } else {
        console.log("projectSectionRef is undefined."); // Debugging line
      }
    } else {
      // If not on /home, navigate to /home first
      navigate('/', { replace: true });

      // Delay the scroll slightly to ensure navigation has completed
      setTimeout(() => {
        if (projectSectionRef.current) {
          projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          console.log("Navigated and scrolling to project section...");
        }
      }, 100); // Adjust this delay if needed
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <p className='nav-title'>Rishu Raj</p>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/project" className="nav-link" onClick={handleProjectsClick}>Project</a>
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
