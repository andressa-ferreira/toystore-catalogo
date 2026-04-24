import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaHome, FaTh, FaCog, FaUsers, FaTimes } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { isAdmin } = useAuth()

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <nav className="sidebar-nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={toggleSidebar}
          >
            <FaHome className="nav-icon" />
            <span> INÍCIO </span>
          </NavLink>
          
          <NavLink 
            to="/catalog" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={toggleSidebar}
          >
            <FaTh className="nav-icon" />
            <span>BRINQUEDOS</span>
          </NavLink>
          
          {isAdmin() && (
            <NavLink 
              to="/admin" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={toggleSidebar}
            >
              <FaCog className="nav-icon" />
              <span>Administração</span>
            </NavLink>
          )}
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={toggleSidebar}
          >
            <FaUsers className="nav-icon" />
            <span> EQUIPE </span>
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
