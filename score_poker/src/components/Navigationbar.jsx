import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigationbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Familia do Poker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/register">Cadastro</Nav.Link>
              <Nav.Link href="/settings">Configuraçã</Nav.Link>
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Navigationbar;
