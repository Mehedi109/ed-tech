import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import machineLearning from "../../../images/machine-learning.png";
import dataScience from "../../../images/data-science.jpg";
import python from "../../../images/python.png";
import js from "../../../images/js.jpg";

const Services = () => {
  return (
    <div id="services">
      <Container>
        <Row className="g-5">
          <h3>Our Services</h3>
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={js} height="190" />
              <Card.Body>
                <Card.Title>JavaScript Basic to Advance</Card.Title>
                <Card.Text>
                  JavaScript is a high-level, often just-in-time compiled
                  language that conforms to the ECMAScript standard. It has
                  dynamic typing, prototype-based object-orientation, and
                  first-class functions
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <button className="btn btn-primary">Buy Now</button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={dataScience} height="190" />
              <Card.Body>
                <Card.Title>Data Science Fundamentals</Card.Title>
                <Card.Text>
                  Data science is an interdisciplinary field that uses
                  scientific methods, processes, algorithms and systems to
                  extract knowledge and insights from noisy, structured and
                  unstructured data.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <button className="btn btn-primary">Buy Now</button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={machineLearning} height="190" />
              <Card.Body>
                <Card.Title>Machine Learning</Card.Title>
                <Card.Text>
                  Machine learning is the study of computer algorithms that can
                  improve automatically through experience and by the use of
                  data. It is seen as a part of artificial intelligence.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <button className="btn btn-primary">Buy Now</button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card>
              <Card.Img variant="top" src={python} height="190" />
              <Card.Body>
                <Card.Title>Python Fundamentals</Card.Title>
                <Card.Text>
                  Python is a high-level, general-purpose programming language.
                  Its design philosophy emphasizes code readability with the use
                  of significant indentation.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <button className="btn btn-primary">Buy Now</button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
