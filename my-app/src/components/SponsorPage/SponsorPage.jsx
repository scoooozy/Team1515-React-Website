import React from "react";
import NavPage from "../Navbar/Navbar";
import "./SponsorPage.css";
import GeneHaas from "./Gene Haas Logo.png";
import OhanaCo from "./Ohana & Co Logo.png";
import Footer from "../Footer/Footer";
import whiteHaas from "./Haas White.png";
import { Container, Row } from "react-bootstrap";

const SponsorPage = () => {
  return (
    <div>
      <div className="black">
        <NavPage />
        <div className="bg-sponsors header">
          <h1 className="sptext">
            SPONSORS
            <h1 className="sptext-sub">THANK YOU FOR SUPPORTING OUR TEAM</h1>
          </h1>
        </div>
          <Container>
            <Row>
              <img src={whiteHaas} alt="Gene Haas Foundation" className="sp-img" />
              <img src={OhanaCo} alt="Ohana & Co"  className="sp-img"/>
            </Row>
          </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorPage;
