import React from "react";
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

const Admin = () => {
  return (
    <div>
      <Alert variant="dark" style={{ padding: "5px" }}>
        <Alert.Heading>ADMIN DASHBOARD</Alert.Heading>
      </Alert>
      <Row xs={1} md={3} className="g-0">
        <Col>
          <Card border="secondary" style={{ margin: "5px" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>REGISTER NEW USER</Card.Title>
              <Card.Img
                variant="top"
                src="https://cdn1.iconfinder.com/data/icons/university-indigo-vol-1/256/Enrollment-512.png"
                style={{ height: "250px", width: "250px" }}
              />
              <div>
                <Button
                  style={{ margin: "5px" }}
                  variant="primary"
                  onClick={() => {
                    window.location.href =
                      "https://samraksha.herokuapp.com//AddStudent";
                  }}
                >
                  Add Student
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  variant="primary"
                  onClick={() => {
                    window.location.href =
                      "https://samraksha.herokuapp.com//AddTeacher";
                  }}
                >
                  Add Teacher
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="secondary" style={{ margin: "5px", height: "365px" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>MANAGE CLASSROOMS </Card.Title>
              <Card.Img
                variant="top"
                src="https://png.pngtree.com/png-vector/20190721/ourmid/pngtree-classroom-icon-for-your-project-png-image_1555535.jpg"
                style={{ height: "250px", width: "250px" }}
              />
              <br />
              <Button
                variant="primary"
                style={{ marginTop: "2%" }}
                onClick={() => {
                  window.location.href =
                    "https://samraksha.herokuapp.com//manageclasses";
                }}
              >
                Manage
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="secondary" style={{ margin: "5px", height: "365px" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>MANAGE TIMETABLE </Card.Title>
              <Card.Img
                variant="top"
                src="https://cdn4.iconfinder.com/data/icons/ikooni-outline-seo-web/128/seo-53-512.png"
                style={{ height: "250px", width: "250px" }}
              />
              <br />
              <Button variant="primary" style={{ marginTop: "2%" }}>
                Manage
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
