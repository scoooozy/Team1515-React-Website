import React from "react";
import "./LeadersPage.css";
import NavPage from "../Navbar/Navbar";
import Header from "../Header/Header";
import PersonCard from "../PersonCard/PersonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cameron from "./cameron_1500x1000.png";
import Andrew from "./andrew_1500x1000.jpg";
import Chazz from "./chazz_1500x1000.jpg";
import Kaylen from "./kaylen_1500x1000.jpg";
import Odelia from "./odelia_1500x1000.jpg";
import Rachel from "./rachel_1500x1000.jpg";
import Arielle from "./ariella_1500x1000.jpg";
import Castle from "./castle_1500x1000.png";
import LeadersBG from "./leadership.jpg";
import Footer from "../Footer/Footer";
import { useRef } from "react";
const LeadersPage = (props) => {
  const ref = useRef(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <NavPage />
      <Header wText="OUR " oText="LEADERS" min="800" bg={LeadersBG}>
        <button
          className="scroll-btn"
          onClick={handleScroll}
        >
          Scroll Down
        </button>
      </Header>
      <Container className="person-card-container">
        <Row>
          <PersonCard
            ref={ref}
            bg={Andrew}
            name="Andrew Galen"
            position="President"
            description="I am currently a Senior and am on my fourth year on the robotics team. For the past couple years I have been a programming specialist developing code for the robot and teaching new students. I now am the President of the team, where I help lead multiple divisions and set a model for newer members. I enjoy working with such an amazing group of students and cannot wait to have an another great year with Mortorq."
          />
          <PersonCard
            bg={Cameron}
            name="Cameron Asher"
            position="Vice President"
            description="This is my fourth year on the robotics team. I'm currently the vice president, head of programming, and the head of web development I've loved programming for a while and being on Mortorq has taught me many practical and real-world skills so I'm very grateful for FRC and Mortorq. I really enjoy leading the amazing students on our team and hope to help make this team the best it can."
          />{" "}
          <PersonCard
            bg={Chazz}
            name="Chazz Rugiero"
            position="Build Specialist"
            description="This is my 4th year on MorTorq and in FRC, and I am a senior. Previously, I was head pit tech. As build leader I ensure that all mechanical aspects of the robotare in check, and that all build sub-teams are working in cohesion. This team is like my second family, and I am so grateful to be able to work alongside them. My favorite parts of FRC are the people involved and their robots. The diversity involved in both the people competing and their design choices is beautiful. <3"
          />{" "}
        </Row>
        <Row>
          <PersonCard
            bg={Odelia}
            name="Odelia Shofet"
            position="Machine Specialist"
            description="I am a current junior and have been on this team for the past three years. As machine specialist, I oversee the woodshop and teach new membersabout the machinery. From freshman year, I have loved everything mechanical and machinery, Being on MorTorq, I have learned a variety of skills, from using SolidWorks to leading a group of students. I look forward to the rest of the year and next year on this team! Go MorTorq!"
          />
          <PersonCard
            bg={Kaylen}
            name="Kaylen Wi"
            position="Electrical Specialist"
            description="This is my third year on the team. As electrical specialist, I wire the robot to ensure Build can run the different components they builtwith the code Programers wrote. Electrical piqued my interest freshman year and since then I worked very hard to increase my knowledge. Mortorq has given me many opportunities from learning how to use power tools to developing my engineering and leadership skills. I have met so many amazing people through this program and hope to encourage more girls to join FIRST."
          />{" "}
          <PersonCard
            bg={Arielle}
            name="Arielle Efron"
            position="Safety Capitan"
            description="I am a sophomore and the Safety Captain of team 1515, and this is my second year in robotics. As Safety Captain, I create and enforce protocolsto ensure that the team is safe at all times. Safety is an absolute necessity and priority, and I hope to share my passion for FRC with anyone interested in educating themselves on how to further protect their team. I am also committed to encouraging more girls into joining FRC."
          />{" "}
        </Row>
        <Row>
          <PersonCard
            bg={Rachel}
            name="Rachel Cohen"
            position="CAD Specialist"
            description="This is my third year with Team 1515. As CAD Specialist, I teach students about Computer Aided Design (CAD) and help them develop their skillson the Solidworks program. Thanks to the Robotics Program, I have developed skills in engineering, machinery, design, and leadership. I hope to continue teaching and encouraging more females, as well as many of those in the Arts departments, to join Robotics."
          />
          <PersonCard
            bg={Castle}
            name="John R. Castle II"
            position="Robotics Teacher"
            description="Hello! I am one of the science and engineering teachers here at Beverly Hills High School. I have been a teacher at Beverly Hills High since 2017. I completed my education at Portland State University in Portland Oregon. I majored in Organismal Biology (pre-med track) and obtained a Master's of Education with a dual endorsement for Biology and Special Education. I have been teaching since 2009. This year I will be teaching Biology, Introduction to Engineering Design, and Robotics."
          />{" "}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default LeadersPage;
