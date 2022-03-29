import React, { useState } from "react";
import { Col, Container, Form, NavLink, Row, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import register from "../../../images/login1.png";

const Register = () => {
  const [registerData, setRegisterData] = useState();
  const navigate = useNavigate();
  const { registerUser, user, isLoading, error } = useAuth();

  const location = useLocation();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleRegister = (e) => {
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      navigate
    );
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h3 className="mt-5 mb-5">Register Here</h3>
            {user.email && (
              <p className="text-success"> User created successfully</p>
            )}
            {error && <p className="text-danger"> {error}</p>}
            {!isLoading && (
              <Form className="mx-1 mx-md-4" onSubmit={handleRegister}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw "></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="password2"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    marginRight: "330px",
                    marginBottom: "20px",
                  }}
                >
                  Register
                </button>{" "}
                <br />
                <NavLink
                  as={Link}
                  style={{ textDecoration: "none" }}
                  to="/login"
                >
                  Already Registered?Please Login
                </NavLink>
              </Form>
            )}
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img src={register} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
