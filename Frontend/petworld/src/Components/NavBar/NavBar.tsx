import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file for styling

const NavBar: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
