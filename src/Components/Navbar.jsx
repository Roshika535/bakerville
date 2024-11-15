// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';


const pages = [
  { name: 'Home', link: '/' },
  { name: 'Baker Catlog', link: '/bakercatlog' },
  { name: 'Shop Now', link: '/shopnow' },
  { name: 'About Us', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Contact Us', link: '/contact' },
];

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">BAKERVILLE</a>
        </div>
        <nav className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
          {pages.map((page) => (
            <a key={page.name} href={page.link} onClick={toggleNav}>
              {page.name}
            </a>
          ))}
        </nav>
        <div className="navbar-auth">
          <button className="navbar-btn" onClick={() => window.location.href = '/login'}>Login</button>
          <button className="navbar-btn" onClick={() => window.location.href = '/signup'}>Signup</button>
        </div>
        <button className="navbar-toggle" onClick={toggleNav}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;
