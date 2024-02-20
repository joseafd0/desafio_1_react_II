import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarHappy() {
  return (
    <Navbar className="navbar" bg="danger" variant="light">
      <Container>
        <Nav className="navbar">
          <Link to="/" className="text-light text-decoration-none">
            🏠 Home
          </Link>
          <Link to="/contacto" className="text-light text-decoration-none">
            📒 Contacto
          </Link>
        </Nav>
        <Nav>
          <Navbar.Brand className="text-light" to="/">
            Happy Cakes 🎂
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarHappy;
