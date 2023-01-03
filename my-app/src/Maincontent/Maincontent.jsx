import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Maincontent.css"

function ContainerFluid() {
  return (
    
      
        <Container className='container'>
        <Row className='header'>
            <Col className='col-item'>
                <h2 className='header'><span className="mor">BetterMor</span><span className='torq'>Torq</span></h2>            
                <button  className='btn' href="#history">
                Learn More
              </button> 
              
            </Col>
        </Row>
      <Row>

        <Col>          
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
          </Col>
      </Row>
      <Row className='teamhistory'>
      <h2 className='H2' id='history'>Team History</h2>

        <div className='hl'></div>
        
        
        <div className="col1">
          
        <h2 className='subheading' id='history'>Team History</h2>
        <div className='vl'></div>
        <p className='text'>Our team competes in the FIRST robotics competition as Team 1515. Team 1515 was founded in the fall of 2004 under the leadership of Former Principal of Beverly Hills High School Dr. Dan Stepenosky, member of the School Board Dr. Myra Demeter, Beverly Hills High School Chemistry Teacher Charles Lee, and parent Eileen Kahn. Under their leadership, Team 1515 grew to become a well-known team. Our team continued to flourish with the help of parent Eileen Kahn, who became a credentialed teacher to keep the program in existence. Thanks to the strong leadership and dedication of our teacher, John Castle, our team is moving full S.T.E.A.M ahead. With new student leadership, more efficient subdivisions, and fresh thinking, MorTorq is reaching for the stars. Currently, we have 42 students enrolled, along with many other affiliated with our robotics business team. In 2019, we had the honor to be awarded the prestigious Chairman's Award and traveled to the FRC International Competition with our registration fee sponsored by NASA. The 2022-2023 FIRST season will be our team’s ninteenth year competing.</p>

        </div>
        
        
      </Row>
    </Container>

    
  );
}

export default ContainerFluid;