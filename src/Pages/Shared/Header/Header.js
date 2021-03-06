import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import './Header.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
  const [user] = useAuthState(auth);
  
  
  const handleSignOut = () => {
    signOut(auth);
  };

    return (
      <div>
        <div className="text-center discount-banner">
          <h6 className='py-2'>UP TO 30% OFF DISCOUNT - خصم يصل ٥٠ بالمئه</h6>
        </div>
        <Navbar
          className="py-4"
          collapseOnSelect
          expand="lg"
          bg="light"
          sticky="bottom"
          variant="light"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <div className="d-flex align-items-center justify-content-center">
                <img height={40} src={logo} alt="" />{" "}
                <span className="fs-1 logo-title">Scentitude</span>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home" className="fs-5">
                  Home
                </Nav.Link>
                <Nav.Link href="home#products" className="fs-5">
                  Products
                </Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="collasible-nav-dropdown"
                  className="fs-5"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about" className="fs-5">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/blogs" className="fs-5">
                  Blogs
                </Nav.Link>
                {user && (
                  <>
                    <Nav.Link className="fs-5" as={Link} to="/additem">
                      Add Item
                    </Nav.Link>
                    <Nav.Link className="fs-5" as={Link} to="/manage">
                      Manage Items
                    </Nav.Link>
                    <Nav.Link className="fs-5" as={Link} to="/myitems">
                      My Items
                    </Nav.Link>
                  </>
                )}

                {user ? (
                  <button
                    className="btn btn-link text-decoration-none fs-5 border"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Nav.Link as={Link} to="/login" className="fs-5">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;