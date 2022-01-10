import React from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const navItem = [
  { name: 'Dashboard', path: 'dashboard' },
  { name: 'Member', path: 'member' },
  { name: 'Ticket', path: 'ticket' }
]

const Sidebar = ({activeSidebar}) => {
  return (
    <div>
      <div id="sidebar" className={activeSidebar ? 'active' : 'hidden'}>
        <div className="logo">
          <NavLink to='dashboard'>
            Water Park
          </NavLink>
        </div>
        {
          navItem.map((item) => {
            return <div className='nav' key={item.name}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? 'link-active' : ''} >
                {item.name}
              </NavLink>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Sidebar;
