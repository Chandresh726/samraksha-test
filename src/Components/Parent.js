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
const Parent = () => {
    return (
        <div>
            <Alert variant="dark" style={{ padding: "5px" }}>
        <Alert.Heading>PARENT DASHBOARD</Alert.Heading>
      </Alert>
      <Row xs={1} md={3} className="g-0">
        <Col>
          <Card border="secondary" style={{ margin:"5px", cursor: "pointer",fontWeight:"600",fontFamily:"system-ui"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>VIEW NOTIFICATION  </Card.Title>
              <Card.Img variant="top" src="https://media.istockphoto.com/photos/notification-bell-icon-isolated-on-white-picture-id1303181346?k=20&m=1303181346&s=612x612&w=0&h=Vn_TOKw-cn4Jw77duKSvOCqfIYLFrf9wC9lsY1y8kmw="  style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card border="secondary" style={{ margin:"5px", cursor: "pointer"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>VIEW ATTENDANCE </Card.Title>
              <Card.Img variant="top" src="https://icon-library.com/images/student-attendance-icon/student-attendance-icon-2.jpg"  style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card onClick={() => {window.location.href="/moment"}} border="secondary" style={{ margin:"5px", cursor: "pointer"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>VIEW MOVEMENT</Card.Title>
              <Card.Img variant="top" src="https://icon-library.com/images/check-in-check-out-icon/check-in-check-out-icon-20.jpg"  style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card onClick={() => {window.location.href="/viewcomplaints"}} border="secondary" style={{ margin:"5px", cursor: "pointer"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>VIEW COMPLAINTS</Card.Title>
              <Card.Img variant="top" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/complaints-3502367-2931324.png"  style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        </div>
    );
};

export default Parent;