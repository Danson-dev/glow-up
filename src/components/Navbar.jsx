import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <div className='main-nav-div'>
        <div className='logo-div'>
          <div className='logo-text'>
            <h1>GLOW-UP</h1>
            <h5>Carpet cleaners</h5>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='logo-side desktop-nav'>
          <Link className='contact order' to='/signup'>
            Sign Up
          </Link>
          <Link className='contact order' to='/signin'>
            Sign In
          </Link>
          <Link className='contact order' to='/order'>
            Order
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <button className='contact'>
              Contact us
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className='hamburger-menu' onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className='sidebar-content'>
          <div className='sidebar-header'>
            <h2>GLOW-UP</h2>
            <button className='close-menu' onClick={closeMenu}>×</button>
          </div>
          <div className='sidebar-links'>
            <Link className='sidebar-link' to='/signup' onClick={closeMenu}>
              Sign Up
            </Link>
            <Link className='sidebar-link' to='/signin' onClick={closeMenu}>
              Sign In
            </Link>
            <Link className='sidebar-link' to='/order' onClick={closeMenu}>
              Order
            </Link>
            <Link className='sidebar-link' to='/contact' onClick={closeMenu} style={{ textDecoration: 'none' }}>
              <div style={{ color: 'white', textDecoration: 'none' }}>Contact us</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className='menu-overlay' onClick={closeMenu}></div>}
    </div>
  )
}

export default Navbar