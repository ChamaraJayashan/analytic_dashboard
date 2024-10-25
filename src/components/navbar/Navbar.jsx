import React from 'react';
import './Navbar.scss';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__center">
        <input type="text" placeholder="Search..." />
        <FaSearch className="navbar__search-icon" />
      </div>
      <div className="navbar__right">
        <FaBell className="navbar__icon" />
        <FaUserCircle className="navbar__icon" />
        <span>Hello User</span>
      </div>
    </div>
  );
};

export default Navbar;
