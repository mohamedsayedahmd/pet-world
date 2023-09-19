import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "./NavBar.css";
const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick} className='web_site_title'>
        Pet World
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarNav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto mx-3">
          <Nav.Link
            as={Link}
            to="/"
            className={` ${
              location.pathname === '/' ? 'active' : ''
            }`}
            onClick={handleNavItemClick}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            className={` ${
              location.pathname === '/login' ? 'active' : ''
            }`}
            onClick={handleNavItemClick}
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/register"
            className={` ${
              location.pathname === '/register' ? 'active' : ''
            }`}
            onClick={handleNavItemClick}
          >
            Register
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about-us"
            className={` ${
              location.pathname === '/about-us' ? 'active' : ''
            }`}
            onClick={handleNavItemClick}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/search"
            className={` ${
              location.pathname === '/search' ? 'active' : ''
            }`}
            onClick={handleNavItemClick}
          >
            Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
