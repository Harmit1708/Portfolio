import React from "react";
import { Navbar, Nav } from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      <Navbar
          collapseOnSelect
          expand="lg"
          className=" text-dark col-md-12 header position-fixed"
          style={{backgroundColor:"#f2cb1f",color:"black",letterSpacing:"2px"}}
        >
          <Navbar.Brand href="#Home" >H@rmit</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ml-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#Work">Work</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;
