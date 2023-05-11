import React from "react";
import "./Card.css";
import "./animation.css";

const Card = ({ onClick, bg }) => {
  return (
    <div className="person-card">
      <div className="card-back">
        <button onClick={onClick}>Back</button>
      </div>
      <div
        className="card-front"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        Front
        <button onClick={onClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Card;