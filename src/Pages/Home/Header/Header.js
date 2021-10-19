import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from './../../../logo.png'
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth();
    return (
      <div>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto sticky-top">
                <Nav.Link>
                  <NavLink
                    to="/home"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                      textDecoration: "none",
                    }}
                    className="nav-item"
                    activeClassName="selected"
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/our-services"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                      textDecoration: "none",
                    }}
                    className="nav-item"
                    activeClassName="selected"
                  >
                    Service
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/our-doctors"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                      textDecoration: "none",
                    }}
                    className="nav-item"
                    activeClassName="selected"
                  >
                    Doctors
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/careers"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                      textDecoration: "none",
                    }}
                    className="nav-item"
                    activeClassName="selected"
                  >
                    Careers
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/our-blog"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                      textDecoration: "none",
                    }}
                    className="nav-item"
                    activeClassName="selected"
                  >
                    Blog
                  </NavLink>
                </Nav.Link>
                <div>
                  {user?.email ? 
                      <Button
                        onClick={logOut}
                        className="btn mx-2 custom-btn"
                        variant="outline-none"
                      >
                        Logout
                      </Button>
                    :
                    <Link to="/login">
                      <Button
                        className="btn mx-2 custom-btn"
                        variant="outline-none"
                      >
                        Sign in
                      </Button>
                    </Link>
                  }
                  {user.email ? 
                    
                      <p>
                        {user?.displayName}
                      </p>
                    
                   : 
                    <Link to="/register">
                      <Button className="btn custom-btn" variant="outline-none">
                        Register
                      </Button>
                    </Link>
                  }
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;