import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import userAvatar from '../assets/user.png';
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <Navbar bg='light' expand='lg' className='sticky-top p-0'>
        <Container>
          <Link to='/' className='text-decoration-none p-0'>
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
              {!user ? (
                <>
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
                </>
              ) : (
                <NavDropdown
                  title={
                    user?.photoURL ? (
                      <span data-toggle='tooltip' title={user?.displayName}>
                        <img
                          src={user?.photoURL}
                          className='rounded-circle'
                          style={{ width: '30px' }}
                        />
                      </span>
                    ) : (
                      <span data-toggle='tooltip' title={user?.displayName}>
                        <img src={userAvatar} style={{ width: '30px' }} />
                      </span>
                    )
                  }
                  id='basic-nav-dropdown'
                  className='ps-3'
                >
                  <Link className='nav-link'>Profile</Link>
                  <Link className='nav-link'>Another action</Link>
                  <Link className='nav-link'>Something</Link>
                  <NavDropdown.Divider />
                  <button className='btn-home' onClick={handleLogout}>
                    Logout
                  </button>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
