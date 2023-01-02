import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Maincontent.css"
function ContainerFluid() {
  return (
    
      
        <Container className='container'>
        <Row>
            <Col>
                <h2 className='header'>This is 6 reasons why this version of mortorq website is better</h2>
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
    </Container>

    
  );
}

export default ContainerFluid;