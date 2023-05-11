import React from "react";
import "./LeadersPage.css";
import NavPage from "../Navbar/Navbar";
import Header from "../Header/Header";
import PersonCard from "../PersonCard/PersonCard";
import Cameron from "./cameron_1500x1000.png";

const LeadersPage = (props) => {
  return (
    <div>
      <NavPage />
      <Header wText="OUR " oText="TEAM" />
      <PersonCard bg={Cameron} />
    </div>
  );
};

export default LeadersPage;
