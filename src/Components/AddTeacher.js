import React from "react";
import {useState} from "react";
import {
  Container,
  Button,
  Card,
  Table,
  Form,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import Header from "./Header";

const AddTeacher=()=>{
  const [Name, setName] = useState("");
  const [subject, setsubject] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Age, setAge] = useState("");
  const [Classteacher, setClassteacher] = useState("");
  const [Classnos, setClassnos]=useState([]);
  const [resp,setresp]=useState({});

 const handleassigned=(e)=>{
    let text=e.target.value;
    let arr=text.split(",");
    setClassnos(arr);
 }
  const handlesubmit = (e) => {
    e.preventDefault();
    let body = {
      name:Name,
      subject:subject,
      password: Password,
      email: Email,
      age: Age,
      classteacher:Classteacher,
      assignedclasses:Classnos,
    };
    fetch("/api/register/teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setresp(data);
        console.log(data);
        
      });
  };
  return (
    <div>
      <Header/>
      <Container>
        <div className="form">
          <Card>
            <Card.Body>
              <div className="pageheading">Register Teacher</div>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter  Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=" Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Subject"
                    onChange={(e) => setsubject(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Enter Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter  Age"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicCName">
                  <Form.Label>Enter Class as Class Teacher</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Class Number"
                    onChange={(e) => setClassteacher(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCName">
                  <Form.Label>Enter Assigned classes with comma</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Class Numbers"
                    onChange={handleassigned}
                  />
                </Form.Group>
               
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => {
                    handlesubmit(e);
                  }}
                >
                  Sign Up
                </Button>
              </Form>
              {resp.status == "ok" ? (
                <Alert key="alert" variant="success">
                  Successfully updated
                </Alert>
              ) : (
               <div></div>
              )}
              {resp.status == "error" ? (
                <Alert key="alert" variant="danger">
                  Invalid Details
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
export default AddTeacher;