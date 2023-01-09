import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  Table,
  Form,
  Row,
  Alert,
  Col,
} from "react-bootstrap";
import Header from "./Header";

const Moment = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("...");
  useEffect(() => {
    fetch("/api/getmoments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rollno: localStorage.getItem("rollno") }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.moments);
        if (data.moments[data.moments.length - 1].checkin === "false")
          setStatus("not at Hostel Premises@danger");
        else setStatus("at Hostel Premises@success");
      });
  }, []);
  if (data.length === 0) {
    let color = status.split("@")[1];
    let msg = status.split("@")[0];
    console.log(color + " " + msg);
    return (
      <div>
        <Header />
        <Card>
          <Card.Header>STUDENT MOMENT</Card.Header>
          <Alert variant={color} >
            <Alert.Heading align="center">Your Ward is {msg}</Alert.Heading>
          </Alert>
          <Card.Body>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Check OUT</th>
                  <th>Description</th>
                  <th>Check IN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan={3} align="center">
                    No Moments Found
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
  let color = status.split("@")[1];
  let msg = status.split("@")[0];
  console.log(color + " " + msg);
  return (
    <div>
      <Header />
      <Card style={{ margin: "10px 0" }}>
        <Card.Header align="center">STUDENT MOMENT</Card.Header>
        <Alert variant={color}>
          <Alert.Heading align="center">Status - Your ward is {msg}</Alert.Heading>
        </Alert>
        <Card.Body>
          <Table style={{maxWidth:"700px",margin:"auto"}} bordered hover>
            <thead>
              <tr>
                <th>Check OUT</th>
                <th>Description</th>
                <th>Check IN</th>
              </tr>
            </thead>
            <tbody>
              {data.map((each) => {
                return (
                  <tr>
                    <td>{each.checkout}</td>
                    <td>{each.description}</td>
                    <td>{each.checkin==="false"?"Not yet checked in":each.checkin}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moment;
