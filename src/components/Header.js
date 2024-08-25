import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from "../assets/logo/logo.png";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';  // Import HashLink for smooth scrolling

import PriceList from '../components/PriceList'; // Import the PriceList component

const Header = () => {
  const [showPriceList, setShowPriceList] = useState(false);

  const items = [
    { product: 'Product 1', quantity: 1, amount: 10 },
    { product: 'Product 2', quantity: 2, amount: 20 },
    // Add more items as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const togglePriceList = () => {
    setShowPriceList(prevShowPriceList => !prevShowPriceList);
  };

  return (
    <header>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} smooth to="#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#about">
                About
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#shop">
                Shop
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#blog">
                Blog
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#contact">
                Contact
              </Nav.Link>
              
              <Nav.Link as={Link} to="#" onClick={togglePriceList}>
              <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`sidebar ${showPriceList ? 'active' : ''}`}>
        <button className="close-btn" onClick={togglePriceList}>×</button>
        <PriceList items={items} />
      </div>
      {showPriceList && <div className="overlay" onClick={togglePriceList}></div>}
    </header>
  );
}

export default Header;
