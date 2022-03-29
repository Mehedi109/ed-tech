import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import user from "../../../images/user.png";

const Review = () => {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5">Students Reviews</h3>
        <Row className="g-5 mb-5">
          <Col xs={12} md={6} lg={4}>
            <div
              className="card p-3 text-center px-4 shadow-lg"
              style={{ border: "none", height: "" }}
            >
              <div className="user-content">
                <img src={user} width="100" alt="" />
                <h5 className="">Elon Mask</h5>{" "}
                <h6 className="">elon22@gmail.com</h6>{" "}
                <p>
                  The way your are providing the service is really very good
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
              className="card p-3 text-center px-4 shadow-lg"
              style={{ height: "", border: "none" }}
            >
              <div className="user-content">
                <img src={user} width="100" alt="" />
                <h5 className="">Shahed Miah</h5>{" "}
                <h6 className="">shahed300@gmail.com</h6>{" "}
                <p>
                  I am a student of this institute and I am really very
                  satisfied to them.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
              className="card p-3 text-center px-4 shadow-lg"
              style={{ height: "", border: "none" }}
            >
              <div className="user-content">
                <img src={user} width="100" alt="" />
                <h5 className="">Rashed Khan</h5>{" "}
                <h6 className="">rashed@gmail.com</h6>{" "}
                <p>
                  Overall it is a good institute and the teacher is very humble
                  and helpful
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
