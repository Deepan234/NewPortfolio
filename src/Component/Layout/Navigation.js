import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Logo from '../../Assets/tdc2.png';
import { NavLink } from 'react-router-dom';
import "./navigation.css"


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
         <ul className="naviblue">
           <li className="navigreen">
           <NavLink className="nav-link" to="/">HOME</NavLink>
           </li>
           <li className="navigreen">
           <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
           </li>
           <li className="navigreen">
           <NavLink className="nav-link" to="/project">PROJECT</NavLink>
           </li>
           <li className="navigreen">
           <NavLink className="nav-link" to="/qualification">QUALIFICATION</NavLink>
           </li>
           <li className="navigreen">
           <NavLink className="nav-link" to="/service">SERVICE</NavLink>
           </li>
           </ul>
         </Nav>
         
      </Navbar.Collapse>
     </Container>       
    </Navbar>
    </>
  )
}
