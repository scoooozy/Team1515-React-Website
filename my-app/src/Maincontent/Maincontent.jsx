import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Maincontent.css";

function ContainerFluid() {
  return (
    <Container className="container">
      <Row>
        {/* <Col>          
            <ul className='list'>
                <li className="ulElment">It's made using react js</li>
                <li className="ulElment">It was only made by me</li>
                <li className="ulElment">The code is actualy readable</li>
            </ul>
          </Col>
          <Col>          
            <ul className='list'>
                <li className="ulElment">The names of the classNames are actualy understandable</li>
                <li className="ulElment">The load time is faster</li>
                <li className="ulElment">This website will look better</li>
            </ul>
          </Col> */}
      </Row>
      <Row className="teamhistory">
        <h2 className="H2" id="history">
          Team History
        </h2>

        <div className="hl"></div>

        <div className="col1">
          <h2 className="subheading" id="history">
            Team History
          </h2>
          <div className="vl"></div>
          <p className="text">
            Our team competes in the FIRST robotics competition as Team 1515.
            Team 1515 was founded in the fall of 2004 under the leadership of
            Former Principal of Beverly Hills High School Dr. Dan Stepenosky,
            member of the School Board Dr. Myra Demeter, Beverly Hills High
            School Chemistry Teacher Charles Lee, and parent Eileen Kahn. Under
            their leadership, Team 1515 grew to become a well-known team. Our
            team continued to flourish with the help of parent Eileen Kahn, who
            became a credentialed teacher to keep the program in existence.
            Thanks to the strong leadership and dedication of our teacher, John
            Castle, our team is moving full S.T.E.A.M ahead. With new student
            leadership, more efficient subdivisions, and fresh thinking, MorTorq
            is reaching for the stars. Currently, we have 42 students enrolled,
            along with many other affiliated with our robotics business team. In
            2019, we had the honor to be awarded the prestigious Chairman's
            Award and traveled to the FRC International Competition with our
            registration fee sponsored by NASA. The 2022-2023 FIRST season will
            be our team’s ninteenth year competing.
          </p>
        </div>
      </Row>
      <div className="robot-section">
        <h2 className="robotheading">Our Robots</h2>
        <Row>
          <Col>
            <div class="card">
              <div class="card-content">
                <h2 class="card-title">Rapid React </h2>
                <h4>2022</h4>
                <p class="card-body">
                  In the 2022 season, our team participated in the LA and
                  Ventura regionals and won up to quarter finals in both
                  tournaments. We were twice awarded the FRC Imagery Award for
                  outstanding attractiveness in our engineering and visual
                  aesthetic of both our robot and team appearance.
                  <br></br>
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h2 class="card-title">Infinite Recharge</h2>
                <h4>2020</h4>
                <p class="card-body">
                  Our 2020 robot had a revolver type magazine, a feature that
                  allowed us to carry five balls at a time. The robot could
                  intake balls, place them into the magazine, and then used a
                  solenoid to direct the ball into the two wheel shooter. It
                  also had a climber mechanism that utilized a hook. The swerve
                  drivetrain allowed us to move rapidly and avoid obstacles on
                  the field.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <h2 class="card-title">Destination Deepspace  </h2>
                <h4>2019</h4>
                <p class="card-body">
                  In 2019, our team competed at the Ventura Regional, the LA
                  Regional, and won the Chairmans Award.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ContainerFluid;
