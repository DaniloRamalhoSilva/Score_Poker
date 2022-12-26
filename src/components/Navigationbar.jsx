import React from 'react';
import propTypes from 'prop-types';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Navigationbar({ show, textHeader }) {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <img className="icon" alt="" src="/poker.svg" />
          <Navbar.Brand>{textHeader}</Navbar.Brand>
          { show && (<Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
          )}
          { show && (
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/register">Cadastro</Nav.Link>
              <Nav.Link href="/settings">Configuração</Nav.Link>
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </div>

  );
}

Navigationbar.propTypes = {
  show: propTypes.bool.isRequired,
  textHeader: propTypes.string.isRequired,
};

export default Navigationbar;
