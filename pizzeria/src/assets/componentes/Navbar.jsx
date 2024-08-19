import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const formatNumber = (number) => {
  return number.toLocaleString();
};

const NavbarComponent = () => {
  const total = 25000;
  const token = false;

  return (
    <BootstrapNavbar bg="dark" variant="dark" className="px-5 justify-content-between">
      <Container className="p-0">
        <BootstrapNavbar.Brand href="/">Pizzería Mamma Mía!</BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {token ? (
            <>
              <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
              <Nav.Link as={Link} to="/logout">🔒 Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/Login">🔐 Login</Nav.Link>
              <Nav.Link as={Link} to="/Register">🔐 Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
      <Button variant="outline-primary" style={{ whiteSpace: 'nowrap' }}>🛒 Total: ${formatNumber(total)}</Button>
    </BootstrapNavbar>
  );
};

export default NavbarComponent;
