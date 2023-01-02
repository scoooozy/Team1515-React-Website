import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import "../Footer/Footer.css"
function Footer(){
    return (
        <footer>
            <Container className="footer-container">
                <Row className="footer-row">
                    <Col className="text-center padd">
                    <h3>2022 Scoozy development, All rights reserved </h3>
                    </Col>

                </Row>
                <Row className="footer-row">
                <Col>
                    <a href="https://github.com/scoooozy" className="link">Please Follow</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;