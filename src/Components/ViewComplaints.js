import React from "react";
import { Button, Card, Form, Alert, Container } from "react-bootstrap";
import { useState,useEffect } from "react";
import Header from "./Header";

const ViewComplaints = () => {
    const [complaint,setcomplaint]=useState([]);
    let body={rollno:localStorage.getItem("rollno")}
    useEffect(() => {
        fetch("/api/viewcomplaint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((data) => {
            setcomplaint(data.complaints);
            console.log(data);
          });
      }, []);
      
        return (
            <div>
                <Header/>
                <Container>
                <div className="pageheading">View Complaints</div>
                <div className="view-complaints">
                    {
                        complaint.map((item)=>{
                            return (
                                <Card style={{ minwidth: "100%", height: "150px", margin: "10px" }}>
                            <Card.Body>
                            <Card.Title>
                                <h4>Date:{item.date}, Complaint by:{item.teacher}</h4>
                            </Card.Title>
                            <Card.Text>{item.description}</Card.Text>
              
                            </Card.Body>
                             </Card>
                            )
                        })
                    }
                </div>
                </Container>
            </div>
        );
};
export default ViewComplaints;

