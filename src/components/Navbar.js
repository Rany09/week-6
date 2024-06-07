// Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ userName, logo }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <span>Welcome, {userName}</span>
      </div>
    </nav>
  );
}

export default Navbar;