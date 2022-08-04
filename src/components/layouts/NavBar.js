
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Outlet, Link} from 'react-router-dom';
import LogoBetty from './Logo';
import './NavBar.css';
import CartWidget from './CartWidget';


const NavBarExample = () => {
  return (
    <>

    <Navbar className='NavBG' >
      <Container>
        <img
              alt=""
              src="../../../logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
         <LogoBetty/>
        <Navbar.Brand as={Link} to='/'> La Betty React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='col-1' id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Contact' >Contacto</Nav.Link>
            <NavDropdown title="Clikea amigo" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/'>Productos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/lubricantes'>
                lubricantes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/anales'>
                anales
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/vibradores'>vibradores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/masturbadores'>
                masturbadores
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>
    </>
  )

}

export default NavBarExample