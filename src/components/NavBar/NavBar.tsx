import {Container, Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from '../NavBar/NavBar.module.scss'

function NavBar() {
  return (
    <Navbar sticky="top" className='bg-dark shadow-sm' variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand as={NavLink} to="/">Ferre University</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={style.nav}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca el curso que quieras..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
          <Nav.Link as={NavLink} to="/courses">Cursos</Nav.Link>
          <Nav.Link as={NavLink} to="/cart">Carrito</Nav.Link>
          <Nav.Link as={NavLink} to="/login">Inicia sesion</Nav.Link>
          <Nav.Link as={NavLink} to="/signup">Registrate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar