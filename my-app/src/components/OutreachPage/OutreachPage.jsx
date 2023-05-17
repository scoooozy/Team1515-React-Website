import React from "react";
import NavPage from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import OutreachCard from "../OutreachCard/OutreachCard";
import albion1 from "./images/albion1.jpg";
import albion2 from "./images/albion2.jpg";
import albion3 from "./images/albion3.jpg";
import Header from "../Header/Header";
import { useRef } from "react";
import { Container } from "react-bootstrap";
const OutreachPage = () => {
  const events = [
    {
      title: "Albion Street",
      text: "Members of the MorTorq robotics team visited the Albion Street Elementary School in Los Angeles, California, over the holiday season. Members of the team showcased the robot while others handed out presents and played with the children. This annual event is arguably the most anticipated event of the holiday season for MorTorq. The students at the Albion Street school were as excited for the event as MorTorq members.",
      images: [albion1, albion2, albion3],
    },
  ];
  const ref = useRef(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <NavPage />
      <Header wText="OUT" oText="REACH">
        <p class="header-subtitle fade-in">
          We are a high-school based robotics team that has been providing
          opportunities and education in STEM to our community for years, and
          enabling growth of both our community and students through organizing
          events such as the Women in Stem Speaker Series and Albion Street
          events. We hope to inspire the innovation and spread the skills that
          come with these events in our community and our members, allowing both
          community and team to find great success in life.
        </p>
        <button
          href="#scrollspyHeading1"
          class="btn btn-theme-color modal-toggle"
          onClick={handleScroll}
        >
          <i class="ti-control-play text-danger"></i>
          Learn More
        </button>
      </Header>
      {events.map((e) => (
        <OutreachCard {...e} ref={ref}/>
      ))}
      <Footer />
    </div>
  );
};

export default OutreachPage;
