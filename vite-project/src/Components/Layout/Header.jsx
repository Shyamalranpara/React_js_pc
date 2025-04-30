import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Header = () => {
  return (
    <>

      <nav  className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" id="menu-toggle" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <ul className="menu-items">

  <li>
    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
      About
    </NavLink>
  </li>
  <li>
    <NavLink to="/movie" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
      Movie
    </NavLink>
  </li>
  <li>
    <NavLink to="/contect" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
      Contact
    </NavLink>
  </li>

          </ul>
          <h1 className="logo">Navbar</h1>
        </div>
      </nav>

    </>
  );
};

export default Header;
