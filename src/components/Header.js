import React from 'react'
// import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';

// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/logo/logo.png"
import { Link, } from 'react-router-dom';
import './HeaderStyle.css';



const Header = () => {
  return (
    <header>

    <Navbar  >
      <Container>
        <Navbar.Brand href="#home">
          <Link><img src={Logo} alt="Logo" className='img-fluid' /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/Menu">
              OUR MENU
            </Nav.Link>
            <Nav.Link as={Link} to="/Shop">
              SHOP
            </Nav.Link>
            <Nav.Link as={Link} to="/Blog">
              BLOG
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              CONTACT
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
            <div className='cart'>

              <i class="bi bi-bag fs-5"></i>
              <em className='roundpoint'>2</em>
            </div>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}




export default Header