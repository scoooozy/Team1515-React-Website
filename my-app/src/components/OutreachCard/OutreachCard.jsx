import React from "react";
import "./OutreachCard.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
function CardCarousel({ images }) {
  return (
    <Carousel>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={image} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

const OutreachCard = ({ images, title, text }) => {
  return (
    <Card style={{ width: "45rem" }}>
      <CardCarousel images={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OutreachCard;
