import React from "react";
import Header from "./Header";
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

const Student = () => {
  return (
    <div>
      <Alert variant="dark" style={{ padding: "5px" }}>
        <Alert.Heading>STUDENT DASHBOARD</Alert.Heading>
      </Alert>
      <Row xs={1} md={3} className="g-0">
        <Col>
          <Card border="secondary" style={{ margin:"5px", cursor: "pointer"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>TIMETABLE </Card.Title>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/1061/1061447.png"  style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="secondary" style={{ margin:"5px", cursor: "pointer"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>VIEW ATTENDANCE </Card.Title>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4x9vy2GBVeLnEZejZTZPkrCUlFqG5fBCiA&usqp=CAU"  style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card onClick={() => {window.location.href="/viewqr"}} border="secondary" style={{margin:"5px", cursor: "pointer"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>GENERATE QR </Card.Title>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/579/579359.png" style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Student;
