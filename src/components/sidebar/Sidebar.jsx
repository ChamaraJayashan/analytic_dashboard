import React from 'react';
import './Sidebar.scss';
import logo from '../../assets/logo.png'; 
import { FaHome, FaChartLine, FaCog, FaRegQuestionCircle, FaClipboard, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
      <img src={logo} alt="Logo" className="navbar__logo" />
        <h2>InjeX Pro</h2>
      </div>
      <ul className="sidebar__menu">
        <li>
          <FaHome className="icon" />
          <span>Dashboard</span>
        </li>
        <li>
          <FaChartLine className="icon" />
          <span>Predictions</span>
        </li>
        <li>
          <FaClipboard className="icon" />
          <span>Reports</span>
        </li>
        <li>
          <FaCog className="icon" />
          <span>Settings</span>
        </li>
        <li>
          <FaRegQuestionCircle className="icon" />
          <span>Help</span>
        </li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
