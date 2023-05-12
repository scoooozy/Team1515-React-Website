import React, {forwardRef } from "react";
import "./PersonCard.css";
import Card from "./Card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const PersonCard = ({ bg, name, position, description },ref) => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flipable-card-container" ref={ref}>
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
          bg={bg}
          name={name}
          position={position}
          description={description}
          />
      </CSSTransition>
    </div>
  );
};

export default forwardRef(PersonCard);