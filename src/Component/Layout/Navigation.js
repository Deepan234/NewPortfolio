import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Logo from '../../Assets/tdc2.png';


export default function Navigation() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='black' variant='dark'>
     <Container>
     <Navbar.Brand href="/">TDC</Navbar.Brand>
       <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
       <Navbar.Collapse id='responsive-navbar-nav'>
       <Nav className="me-auto">
           <Nav.Link href="/">HOME</Nav.Link>
           <Nav.Link href="/contact">CONTACT</Nav.Link>
           <Nav.Link href="/project">PROJECT</Nav.Link>
           <Nav.Link href="/qualification">QUALIFICATION</Nav.Link>
           <Nav.Link href="/service">SERVICE</Nav.Link>
         </Nav>
      </Navbar.Collapse>
     </Container>       
    </Navbar>
    </>
  )
}
