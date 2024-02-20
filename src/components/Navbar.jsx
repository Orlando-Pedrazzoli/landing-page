import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <header className='header'>
        <a href='#' className='logo'>
          Orlando Pedrazzoli
        </a>
        <nav className='navbar'>
          <Link
            to='/'
            style={{ '--i': 1 }}
            onClick={() => handleLinkClick('/')}
            className={activeLink === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to='/about'
            style={{ '--i': 2 }}
            onClick={() => handleLinkClick('/about')}
            className={activeLink === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <Link
            to='/projects'
            style={{ '--i': 4 }}
            onClick={() => handleLinkClick('/projects')}
            className={activeLink === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
          <Link
            to='/contact'
            style={{ '--i': 5 }}
            onClick={() => handleLinkClick('/contact')}
            className={activeLink === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
