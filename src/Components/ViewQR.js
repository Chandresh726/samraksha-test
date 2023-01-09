import React from "react";
import QRCode from "react-qr-code";
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

const ViewQR = () => {
  let rollno = localStorage.getItem("rollno");
  var date = new Date();
  var time = date.toLocaleString("en-GB");
  let code = rollno + "@" + time.replace(/\s+/g,"");
  console.log(code);
  return (
    <div>
      <Header />
      <Container align="center">
        <Alert variant="success" style={{margin: "10px" , maxWidth: "600px"}}>
          <Alert.Heading>QR CODE</Alert.Heading>
          <hr />
          <p className="mb-0">
            For checking in and out of the hostel premises scan the qr code 
          </p>
        </Alert>
        <QRCode value={code} style={{ margin: "15px" }} />
      </Container>
    </div>
  );
};

export default ViewQR;
