import "./navbar.css";

import pic from "../images/MorTorq.png";
import picture from "../images/navpic.png"
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavPage(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" className="navbg">
        <Container className="navContent">
          <Navbar.Brand href="#home">
            <img src={picture} alt="logo  " className="logo img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto alignnav">
              <Nav.Link href="#home">
                {" "}
                <Link className="links" to="/">
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown
                title="About"
                id="nav-dropdown-dark-example"
                menuVariant="dark"
                className="links"
              >
                <NavDropdown.Item href="#action/3.1" className="droplinks">
                  <Link className="droplinks" to="/Leaders">
                    Our Leaders
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="droplinks">
                  <Link className="droplinks" to="/Outreach">
                    Outreach
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3" className="droplinks">
                  <Link className="droplinks" to="/Sponsor">
                    Sponsor
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="links">
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavPage;
