import React from 'react'
import './styles.css'
import { Nav, Navbar, Container} from 'react-bootstrap'
import NavWidget from '../NavWidget/NavWidget';
function NavBar() {
  return (
    
    <Navbar bg="dark" expand="lg" className='navbar-dark'>
      <Container fluid>
        <a href="/#" className='logo'>Ozeer</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a className='item' href="/#">Inicio</a>
            <a className='item' href="/#">Productos</a>
            <a className='item' href="/#">Galeria</a>
          </Nav>

          <NavWidget></NavWidget>

        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default NavBar