import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div>
      {" "}
      <div
        class="robot-card"
        style={{
          backgroundImage: `url(${props.bg})`,
        }}
      >
        <div class="robot-card-content">
          <h2 class="robot-card-title">{props.title}</h2>
          <h4>{props.year}</h4>
          <p class="robot-card-body">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
