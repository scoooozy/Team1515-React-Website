import React from "react";
import "./Card.css";
import "./animation.css";
import Button from 'react-bootstrap/Button';


const Card = ({ onClick, bg, name, position, description }) => {
  return (
    <div className="person-card">
      <div className="card-back">
        <div className="person-card-container">
          <h4>{name}</h4>
          <h5>{position}</h5>
          <p>{description}</p>
          <Button variant="outline-dark" className="button"onClick={onClick}>Dark</Button>

        </div>
      </div>
      <div
        className="card-front"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="card-info">
          <div>
            <h4>{name}</h4>
            <h5>{position}</h5>
          </div>
          <Button variant="outline-light" onClick={onClick}>Light</Button>

        </div>
      </div>
    </div>
  );
};

export default Card;
