import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Logo from '../../Assets/tdc2.png';
import { NavLink } from 'react-router-dom';


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
           <NavLink to="/">HOME</NavLink>
           <NavLink to="/contact">CONTACT</NavLink>
           <NavLink to="/project">PROJECT</NavLink>
           <NavLink to="/qualification">QUALIFICATION</NavLink>
           <NavLink to="/service">SERVICE</NavLink>
         </Nav>
      </Navbar.Collapse>
     </Container>       
    </Navbar>
    </>
  )
}
