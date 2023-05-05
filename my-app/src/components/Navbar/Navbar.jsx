import { Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"
import pic from "../images/MorTorq.png"

function nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
      <Nav className="ml-auto align-items-center">
        <Nav.Link href="#" className="rhombus orange-bg">Home</Nav.Link>
        <Nav.Link href="#" className="rhombus orange-bg">About</Nav.Link>
        <Nav.Link href="#" className="rhombus orange-dark-bg">Sponsors</Nav.Link>
        <Nav.Link href="#" className="rhombus">Donate</Nav.Link>
      </Nav>
      </Nav>
    </Navbar>
  );
}

export default nav;
