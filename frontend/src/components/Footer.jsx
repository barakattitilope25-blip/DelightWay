import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/img/fulllogo 1.png';

const Footer = () => {
  const resources = [
    { label: 'Contact Us', path: '/contacts' },
    { label: 'Our Services', path: '/services' },
    { label: 'Project Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Get a Quote', path: '/book-consultation' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <img src={logo} alt="De-lightway Electrical" className="footer-logo" />

        {/* Resource links */}
        <ul className="footer-links">
          {resources.map((item) => (
            <li key={item.label}>
              <Link to={item.path} className="footer-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} De-lightway Electrical. All rights reserved.</p>
        <ul className="footer-legal">
          <li><Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link></li>
          <li><span className="footer-legal-divider">|</span></li>
          <li><Link to="/terms-of-service" className="footer-legal-link">Terms of Service</Link></li>
          <li><span className="footer-legal-divider">|</span></li>
          <li><Link to="/cookies-settings" className="footer-legal-link">Cookies Settings</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
