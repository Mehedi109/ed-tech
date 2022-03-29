import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../../images/about.jpg";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row style={{ margin: "120px 0px" }}>
          <Col sm={12} md={6} lg={6}>
            <h3 className="mt-3 mb-3">About Us</h3>
            <p>
              Ed Tech is a learning institute where students can enroll
              different types of courses according to their choice, all the
              class are held on online, we provide live classes for our
              students, also they can watch the video of the classes that will
              be recorded for the students who can not attend the classes due to
              their problem. We have some criteria to check the students
              progress. We give some task to the student after every three
              classes and we give them an assignment after 1 week. We find out
              the lackings of our student by the task and assignment
            </p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img src={about} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
