import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div>
      {" "}
      <div
        class="card "
        style={{
          backgroundImage: `url(${props.bg})`,
        }}
      >
        <div class="card-content">
          <h2 class="card-title">{props.title}</h2>
          <h4>{props.year}</h4>
          <p class="card-body">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
