import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin,setIsAdmin] = useState([]);
  const [adminStatus,setAdminStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isAdmin?email=" + loggedInUser.userEmail)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        console.log(loggedInUser);
      });
  }, []);
  
  


  return (
    <Container>
      <Navbar bg="" expand="lg">
        <Navbar.Brand href="#home"><Link style={{color:"rgba(0,0,0,0.7)"}} to="/home">Royal Event</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link ><Link style={{color:"rgba(0,0,0,.5)"}} to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link style={{color:"rgba(0,0,0,.5)"}} to="/bookings">Bookings</Link></Nav.Link>
            <Nav.Link ><Link style={{color:"rgba(0,0,0,.5)"}} to="/admin">Admin</Link></Nav.Link>
            {
              loggedInUser.userEmail ? <span></span> :  <Nav.Link ><Link style={{color:"rgba(0,0,0,.5)"}} to="/login">Login</Link></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
