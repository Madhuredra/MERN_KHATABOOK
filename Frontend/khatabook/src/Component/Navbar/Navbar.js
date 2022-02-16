import React from 'react'
import { Nav,Container, Navbar, NavDropdown } from 'react-bootstrap'

const Navbar1 = () => {
  return (
    <Navbar expand="lg" bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href="/">KHATABOOK</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " style={{marginLeft:"80%"}}>
        <Nav className="me-auto">
          <NavDropdown title="Dashboard" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbar1