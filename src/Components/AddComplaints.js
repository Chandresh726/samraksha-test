import React from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { useState } from "react";
import Header from "./Header";

const AddComplaints=()=>{
    const [rollno,setrollno]=useState("");
    const [Complaint,setComplaints]=useState("");
    const [resp,setresp]=useState({});
    const handlesubmit=(e)=>{
      let d=new Date();
      
            e.preventDefault();
            let body = {

                rollno:rollno,
                Teacher:localStorage.getItem("Name"),
                Complaint:Complaint,
                date:d.toLocaleString("en-GB").split(",")[0]
            }
            fetch("https://samraksha-api.onrender.com/api/addcomplaint",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }).then((res)=>res.json()).then((data)=>{
                setresp(data);
            })
    }
    return (
        <div>
          <Header/>
            <div class="form">
                <Card>
                    <Card.Body>
                    <div className="pageheading">Add Complaints</div>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label><h5>Roll no</h5></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Rollno Of Student"
                                onChange={(e) => setrollno(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicblog">
                        <Form.Label>
                          <h5>
                            Please enter the Complaint
                          </h5>
                        </Form.Label>
                        <Form.Control
                          value={Complaint}
                          as="textarea"
                          rows={10}
                          placeholder="Share your reson here"
                          onChange={(e) => setComplaints(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit" onClick={handlesubmit}>
                  Add
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
        </div>
    );
};
export default AddComplaints;