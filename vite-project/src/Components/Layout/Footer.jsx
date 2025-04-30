import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container container">
        <ul className="footer-menu">
          <li><NavLink to="/" className="footer-link">Home</NavLink></li>
          <li><NavLink to="/about" className="footer-link">About</NavLink></li>
          <li><NavLink to="/movie" className="footer-link">Movie</NavLink></li>
          <li><NavLink to="/contect" className="footer-link">Contact</NavLink></li>
        </ul>
        <p className="footer-copy">© 2025 MySite. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
