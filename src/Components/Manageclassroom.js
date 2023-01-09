import React from "react";
import { useState, useEffect } from "react";
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

const Manageclassroom = () => {
  const [classes, setclasses] = useState([]);
  const [operation,setoperation]=useState("");
  const [resp,setresp]=useState({});
  const handlechange = (e) => {
    let str = e.target.value;
    let arr=str.split(",");
    console.log(arr);
    setclasses(arr);
  };
  const handleClasses=(e)=>{
    e.preventDefault();
    let t="2";
    if(operation=="add")t="0";
    if(operation=="remove")t="1";
   
    let body={
      method:t,
      classes:classes
    }
    fetch("https://samraksha-api.onrender.com/api/manageclasses",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(res=>res.json()).then((data)=>{
        setresp(data);
    })
  }
  return (
    <div>
      <Header />
      <Container>
        <div class="form">
          <Card>
            <div className="pageheading">Add Class</div>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUName">
                  <Form.Label>Class Nos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Class nos Comma separated"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group>
                <Form.Select onChange={(e)=>setoperation(e.target.value)}>
                  <option>Select add or remove</option>
                  <option value="add">Add class</option>
                  <option value="remove">Remove class</option>
                  
                </Form.Select>

                </Form.Group>
                <Button
                        style={{ margin: "10px", flex: "right" }}
                        variant="primary"
                        onClick={handleClasses}
                      >
                        Submit
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
                  Invalid Class Nos
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
};
export default Manageclassroom;
