import React from "react";
import { Navbar, Nav } from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      <Navbar
          collapseOnSelect
          expand="lg"
          className=" col-md-12 header position-fixed"
          style={{backgroundColor:"#023b59",letterSpacing:"2px"}}
        >
          <Navbar.Brand href="#Home" className="text-white">H@rmit</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ml-auto">
              <Nav.Link href="#Home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#about" className="text-white">About</Nav.Link>
              <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
              <Nav.Link href="#Work" className="text-white">Work</Nav.Link>
              <Nav.Link href="#Contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;
