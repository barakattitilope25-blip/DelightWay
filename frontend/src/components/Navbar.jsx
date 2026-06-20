import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Navbar.css';
import logo from '../assets/img/fulllogo 1.png'; // Updated path to the logo image

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contacts', path: '/contacts' },
    { name: 'Book Consultation', path: '/book-consultation' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="top-bar">
      <div className="nav-container">
        <Link to="/" className="logo-container" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="De-lightway Electrical" className="nav-logo" />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`nav-button ${item.name === 'Book Consultation' ? 'book-consultation-btn' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="nav-actions">
            <button onClick={toggleTheme} className="theme-toggle">
              {isDarkMode ? '🌙 Night' : '☀️ Day'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
