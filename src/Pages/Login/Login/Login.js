import { Alert } from "bootstrap";
import React, { useState } from "react";
import { Col, Container, Form, NavLink, Row, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import login from "../../../images/login1.png";

const Login = () => {
  const { loginUser, isLoading, error, googleLogIn } = useAuth();
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password).then((result) => {
      navigate(redirect_uri);
    });
  };

  const handleGoogleLogin = () => {
    googleLogIn().then((result) => {
      navigate(redirect_uri);
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2 className="mt-5 mb-5">Login Here</h2>
            {error && (
              <p
                className="text-danger"
                style={{ width: "84%", marginLeft: "65px" }}
              >
                {error}
              </p>
            )}
            {!isLoading && (
              <Form className="mx-1 mx-md-4" onSubmit={handleLogin}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw "></i>
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
                  <i className="fas fa-lock fa-lg me-3 fa-fw "></i>
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
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    marginRight: "330px",
                    marginBottom: "20px",
                  }}
                >
                  Login
                </button>{" "}
                <br />
                <NavLink
                  as={Link}
                  style={{ textDecoration: "none" }}
                  to="/register"
                >
                  New User?Please Register
                </NavLink>
                <button
                  className="btn btn-primary mt-3 mb-5"
                  onClick={handleGoogleLogin}
                >
                  Sign In With Google
                </button>
              </Form>
            )}
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img className="img-fluid" src={login} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
