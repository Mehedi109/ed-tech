import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState([]);
  console.log(serviceDetails);
  const url = "./service.json";

  useEffect(() => {
    const url = `/service.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    const foundService = serviceDetails?.find((details) => details?.id == id);
    setSingleService(foundService);
  }, [serviceDetails]);

  return (
    <div>
      <Header />
      <Container>
        <div className="service-details mt-5">
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src={singleService?.img}
              className="image img-fluid"
              style={{ height: "240px", textAlign: "center" }}
            />
            <Card.Body>
              <Card.Title className="text-center">
                {singleService?.name}
              </Card.Title>
              <Card.Text>{singleService?.description}</Card.Text>
            </Card.Body>
          </Card>
          <button className="btn btn-primary mb-5">Buy Now</button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
