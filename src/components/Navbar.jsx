import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {' '}
      <header className='header'>
        <a href='#' className='logo'>
          Orlando Pedrazzoli
        </a>
        <nav className='navbar'>
          <Link to='/' style={{ '--i': 1 }}>
            Home
          </Link>
          <Link to='/about' style={{ '--i': 2 }}>
            About
          </Link>
          <Link to='/projects' style={{ '--i': 4 }}>
            Projects
          </Link>
          <Link to='/contact' style={{ '--i': 5 }}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
