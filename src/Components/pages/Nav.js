import React from 'react';
import { Nav, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/logo.png'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    <Navbar bg='white' expand='lg'>
      <Container>
      <Navbar.Brand
        href="#about"
        onClick={() => handlePageChange('About')}
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        <img 
          src={logo}
          className='d-inline-block align-top logo'
          alt="Landon's Logo"
        />
      </Navbar.Brand>
      </Container>
      {/* <Container> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
      <Nav className='me-auto'>
      <Nav.Link className="nav-item list me-auto mb-2 mb-lg-0">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </Nav.Link>
      <Nav.Link className="nav-item list me-auto mb-2 mb-lg-0">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Websites`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </Nav.Link>
      <Nav.Link className="nav-item list me-auto mb-2 mb-lg-0">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </Nav.Link>
      <Nav.Link className="nav-item list me-auto mb-2 mb-lg-0">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </Nav.Link>
      </Nav>
      {/* </Container> */}
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

// export default NavTabs;
