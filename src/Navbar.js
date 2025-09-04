// //src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// The onSignupClick prop is removed here
const Navbar = () => { 
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">MentrAI</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mission">Our Mission</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          {/* This is now a Link instead of a button */}
          <Link to="/signup" className="signup signup-highlight">
            Sign Up For Public Beta
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;