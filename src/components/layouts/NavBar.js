
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Outlet, Link} from 'react-router-dom';
import './NavBar.css';

const NavBarExample = () => {
  return (
    <>
    <Navbar className='NavBG'  expand="lg">
      <Container>
      <img
              alt=""
              src="../../../logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        <Navbar.Brand as={Link} to='/'> La Betty React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Products' >Productos</Nav.Link>
            <Nav.Link as={Link} to='/Contact' >Contacto</Nav.Link>
            <NavDropdown title="Clikea amigo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dale click</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                cosita 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Muchas cosas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                cosita 2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>
    </>
  )

}

export default NavBarExample