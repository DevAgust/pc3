import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
export const Menu = () => {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/Articulos'>Articulos</Nav.Link>
        <Nav.Link as={Link} to='/Proveedores'>Proveedores</Nav.Link>
        <Nav.Link as={Link} to='/Ventas'>Ventas</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <section>
    <Outlet></Outlet>
  </section>
  </>
  )
}
