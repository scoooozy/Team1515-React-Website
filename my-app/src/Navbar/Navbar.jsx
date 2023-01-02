import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"

function ColorSchemesExample() {
  return (
    <>

      <Navbar className='nav' variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className='nav-header'>Better Mortorq</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="About"
              menuVariant="dark"
              style={{color:"white",}}
            >
              <NavDropdown.Item href="#action/3.1" className='nav-item'>Awards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='nav-item'>
                Leaders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3 className='nav-item'">Outreach</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='nav-item'>
              Sponsors
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;