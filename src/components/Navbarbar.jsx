import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import '../assets/Navbarbar.css'

export default function Navbarbar() {
 return (
    <div>
      <Navbar bg="dark" variant="dark">

          <Navbar.Brand href="#home">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
      </Navbar>
    </div>
 );
}