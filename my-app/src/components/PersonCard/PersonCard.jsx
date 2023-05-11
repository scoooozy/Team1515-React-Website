import React from "react";
import "./PersonCard.css";
import Card from "./Card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const PersonCard = ({ bg }) => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flipable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
          bg={bg}
        />
      </CSSTransition>
    </div>
  );
};

export default PersonCard;