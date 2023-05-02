import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section>
      <Navbar bg='light' expand='lg' className='sticky-top'>
        <Container>
          <Link to='/' className='text-decoration-none'>
            <span className='logo'>iChef</span>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='text-right'>
            <Nav className='me-auto justify-content-between'>
              <NavLink to='/' className='nav-link'>
                Home
              </NavLink>
              <NavLink to='/blog' className='nav-link'>
                Blog
              </NavLink>
              <NavLink
                to='/login'
                className='justify-content-end text-md-end nav-link'
              >
                Login
              </NavLink>
              <NavLink
                to='/register'
                className='justify-content-end text-md-end nav-link'
              >
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
