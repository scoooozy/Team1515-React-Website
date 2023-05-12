import React from "react";
import "./Card.css";
import "./animation.css";
import Button from "react-bootstrap/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Card = ({ onClick, bg, name, position, description }) => {
  return (
    <div className="person-card">
      <div className="card-back">
        <div className="person-card-container">
          <h4>{name}</h4>
          <h5>{position}</h5>
          <p>{description}</p>
          <button className="learnLess-btn" onClick={onClick}><ArrowBackIosNewIcon sx={{fontSize:35}}/></button>
        </div>
      </div>
      <div
        className="card-front"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="card-info">
          <div className="front-info">
            <div className="person-info">
              <h3>{name}</h3>
              <h4>{position}</h4>
            </div>
            <button onClick={onClick} className="learnMore-btn">
              {" "}
              <NavigateNextIcon sx={{fontSize:48}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
