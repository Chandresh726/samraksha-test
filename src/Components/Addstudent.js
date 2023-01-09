import React from "react";
import {useState,useEffect} from "react";
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

const AddStudent=()=>{
  const [Name, setName] = useState("");
  const [Rollno, setRollno] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, seterror] = useState("");
  const [Age, setAge] = useState("");
  const [ParentName, setParentName] = useState("");
  const [Parentno, setParentno] = useState("");
  const [Classno, setClassno] = useState("");
  const [resp,setresp]=useState({});

 
//   useEffect(() => {
//     fetch("/api/states")
//       .then((res) => res.json())
//       .then((data) => setStates(data.states));
//   }, []);
//   const getDistricts = (s) => {
//     fetch("/api/districts", {
//       method: "POST",
//       body: JSON.stringify({ state: s }),
//     })
//       .then((res) => res.json())
//       .then((data) => setDistricts(data.district));
//   };
  const handlesubmit = (e) => {
    e.preventDefault();
    let body = {
      name:Name,
      email: Email,
      password: Password,
      age: Age,
      rollno:Rollno,
      parentname:ParentName,
      parentnumber:Parentno,
      parentpassword:Parentno,
      classnumber:Classno,
    };
    fetch("/api/register/student", {
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
              <div className="pageheading">Sign Up</div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUName">
                  <Form.Label>User Name(Roll Number)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter User Name ie, Roll Number"
                    onChange={(e) => setRollno(e.target.value)}
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
                  <Form.Text className="text-muted">{error}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
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
                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Enter Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Age"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPname">
                  <Form.Label>Enter Parent's Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Parent's Name"
                    onChange={(e) => setParentName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPnumber">
                  <Form.Label>Enter Parent's Number(phone/mobile)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Parent's Number"
                    onChange={(e) => setParentno(e.target.value)}
                  />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicCName">
                  <Form.Label>Enter Class Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Class Number"
                    onChange={(e) => setClassno(e.target.value)}
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
                  Successfully registered
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
export default AddStudent;