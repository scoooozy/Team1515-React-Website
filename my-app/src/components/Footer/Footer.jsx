import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Footer/Footer.css";
function Footer(props) {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="footer-row">
          <Col className="text-center padd">{props.children}</Col>
        </Row>
        <Row className="footer-row">
          <Col className="footer-info">
            <p className="infos">Follow and support us!!!</p>
            <span>|</span>
            <a href="https://www.instagram.com/frc1515/?hl=en">Instagram</a>
            <a href="https://www.facebook.com/frc1515/">Facebook</a>
            <a href="https://twitter.com/frc1515?lang=en">Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
