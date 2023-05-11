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
      <PersonCard bg={Cameron} name="Cameron" position="Vice President" description="This is my fourth year on the robotics team. I'm currently the vice president, head of programming, and the head of web development I've loved programming for a while and being on Mortorq has taught me many practical and real-world skills so I'm very grateful for FRC and Mortorq. I really enjoy leading the amazing students on our team and hope to help make this team the best it can." />
    </div>
  );
};

export default LeadersPage;
