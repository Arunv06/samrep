import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-brand'>GoZen App</Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/about" className="navbar-link">About</Link>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                    <Link to="/callus" className="navbar-link">Call Us</Link>
                </div>
            </div>
        </nav>
  )
}

export default Navbar