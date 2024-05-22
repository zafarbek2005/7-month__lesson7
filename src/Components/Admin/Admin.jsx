import { IoMdCreate } from "react-icons/io"; 
import { FcManager } from "react-icons/fc";
import { IoCreateOutline } from "react-icons/io5"; 
import React, { useState } from 'react';
import './Admin.scss';
import { NavLink, Outlet } from 'react-router-dom';

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-container ">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>
        <div className="links">
          <NavLink 
            to="/admin/create" 
            className={({ isActive }) => `link ${isActive ? 'active-link' : ''}`}
          >
            <IoCreateOutline className="icon" />
            <span className="text">Create</span>
          </NavLink>
          <NavLink 
            to="/admin/manage" 
            className={({ isActive }) => `link ${isActive ? 'active-link' : ''}`}
          >
            <FcManager className="icon" />
            <span className="text">Manage</span>
          </NavLink>
          <NavLink 
            to="/admin/ManageP" 
            className={({ isActive }) => `link ${isActive ? 'active-link' : ''}`}
          >
            <FcManager className="icon" />
            <span className="text">Product Manage</span>
          </NavLink>
          <NavLink 
            to="/admin/Pcreate" 
            className={({ isActive }) => `link ${isActive ? 'active-link' : ''}`}
          >
            <IoMdCreate className="icon" />
            <span className="text">Product Create</span>
          </NavLink>
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
