import React from 'react'
import { Navigate } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({activeSidebar}) => {
    return (
        <div>
        <div id="sidebar" className={activeSidebar ? 'active' : ''}>
          <div className="logo">
            <Navigate to='/dashboard'>
              <h5>Water Park</h5>
            </Navigate>
          </div>
          <div className="nav">
            <Navigate to='/dashboard'>
              <h5>Dashboard</h5>
            </Navigate>
          </div>
        </div>
      </div>
    )
}

export default Sidebar;
