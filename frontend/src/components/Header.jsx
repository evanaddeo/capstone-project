/// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import CSS for the Header

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/JobList" className="nav-link">Job Listings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
