import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, img, name, price, duration, description } = service;
  const navigate = useNavigate();

  const url = `/service/${id}`;

  const handleDetails = () => {
    navigate(url);
  };
  return (
    <Col xs={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={img} height="190" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>

          <h6>Duration : {duration}</h6>
          <h6>{price}</h6>
        </Card.Body>
        <Card.Footer>
          <button className="btn btn-primary" onClick={handleDetails}>
            See Details
          </button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
