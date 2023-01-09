import React from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { useState } from "react";
import Header from "./Header";

function Login(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [response, setresponse] = useState({});
  let body = {
    username: username,
    password: password,
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    fetch("https://samraksha-api.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setresponse(data);
        if (data.status == "found") {
          localStorage.setItem("Auth", data.Auth);
          localStorage.setItem("Name", data.name || "MANAGEMENT");
          localStorage.setItem("Type", data.type);
          if (data.type == "parent") {
            localStorage.setItem("rollno", data.rollno);
          }
          if (data.type == "student") {
            localStorage.setItem("rollno", username);
          }
          // if (data.type == "teacher") {
          //   localStorage.setItem("username", data.name);
          // }
          window.location.reload();
        } else {
        }
      });
  };
  return (
    <div>
      <Header />
      <Container>
        <div className="form">
          <Card>
            <img
              alt=""
              src="logo.png"
              width="90"
              height="90"
              className="m-auto"
            />
            <Card.Body>
              <div className="pageheading">Log In</div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Enter username"
                    onChange={(e) => setusername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </Form.Group>
                <div>
                  <Button
                    variant="primary"
                    align="centre"
                    type="submit"
                    onClick={handlesubmit}
                    style={{ width: "100%" }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
              {response.status == "error" ? (
                <Alert key="alert" variant="danger">
                  Invalid Credentials
                </Alert>
              ) : (
                <div></div>
              )}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Login;
