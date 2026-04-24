import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ toggleSidebar }) => {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-red-stripe"></div>
      <div className="navbar-content">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="navbar-logo">

          </div>
        </div>
        <div className="navbar-right">
          {isAuthenticated() ? (
            <div className="user-info">
              <FaUser className="user-icon" />
              <span className="user-name">{user.name}</span>
              {user.role === 'ADMIN' && <span className="admin-badge">Admin</span>}
              <button className="btn btn-outline logout-btn" onClick={handleLogout}>
                <FaSignOutAlt /> Sair
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleLogin}>
              Entrar
            </button>
          )}
        </div>
      </div>
      <div className="navbar-black-stripe"></div>
    </nav>
  )
}

export default Navbar
