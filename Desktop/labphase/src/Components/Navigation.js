import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Gotech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navigation