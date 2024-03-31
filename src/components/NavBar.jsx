import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react"
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';
import { ItemDetailContainer } from './ItemDetailContainer';
import { Logo } from './Logo';


export const NavBar =()=>{
    return  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand to="#"><Logo/></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link to="/category/Kit"as={NavLink}>Accesorios</Nav.Link>
        <Nav.Link to="/category/Señuelo" as={NavLink}>Señuelo </Nav.Link>
        <Nav.Link to="/category/T-Shirt" as={NavLink}>Indumentaria</Nav.Link>
       
      </Nav>
      <CartWidget />
      <ItemDetailContainer/>
      
    </Container>
  </Navbar>
}