import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Outlet, Link} from 'react-router-dom';
import LogoBetty from './Logo';
import './NavBar.css';
import CartWidget from './CartWidget';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const NavBarExample = () => {
  const context = useContext(CartContext)

  
  return (
    <>
    <Navbar className='NavBG' expand="lg">
      <Container>
        <img
              alt=""
              src="../../../logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        <LogoBetty/>
        <Navbar.Brand as={Link} to='/Home'>La Betty React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Home'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Contact' >Contacto</Nav.Link>
            <NavDropdown title="Productos y categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/categorias'>Todos los productos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/lubricantes'>
                lubricantes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/anales'>
                anales
              </NavDropdown.Item>
             <NavDropdown.Item as={Link} to='/vibradores'>
                vibradores
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/masturbadores'>
                masturbadores
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/saludSexual'>
                Salud Sexual
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/fetiche'>
                Fetiche
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/aceites'>
                Aceites
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {context.cart.length ?  <CartWidget/> : null }
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>
    </>
  )

}

export default NavBarExample