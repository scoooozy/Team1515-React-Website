import React from "react";
import "./Card.css";
import "./animation.css";

const Card = ({ onClick, bg, name, position, description }) => {
  return (
    <div className="person-card">
      <div className="card-back">
        <div className="person-card-container">
            <h5>{name}</h5>
            <h6>{position}</h6>
            <p>{description}</p>
        
        </div>
        <button onClick={onClick}>Back</button>
      </div>
      <div
        className="card-front"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="card-info">
          <div>
            <h5>{name}</h5>
            <h6>{position}</h6>
          </div>
          <button onClick={onClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
