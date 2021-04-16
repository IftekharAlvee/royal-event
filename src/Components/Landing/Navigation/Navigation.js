import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home">Royal Event</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link ><Link style={{color:"rgba(0,0,0,.5)"}} to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link style={{color:"rgba(0,0,0,.5)"}} to="/bookings">Bookings</Link></Nav.Link>
            <Nav.Link ><Link style={{color:"rgba(0,0,0,.5)"}} to="/admin">Admin</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
