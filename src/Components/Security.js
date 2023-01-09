import React from "react";
import { Link } from "react-router-dom";
// import { FaQrcode } from "react-icons";
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

const Security = () => {
  return (
    <div>
      <Alert variant="dark" style={{ padding: "5px" }}>
        <Alert.Heading>SECURITY DASHBOARD</Alert.Heading>
      </Alert>
      <Row xs={1} md={3} className="g-0">
        <Col>
        </Col>  
        <Col>
          <Card border="secondary" onClick={() => {window.location.href="/scan"}} style={{ margin:"5px", cursor: "pointer",fontWeight:"600",fontFamily:"system-ui"}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>SCAN QR  </Card.Title>
              <Card.Img variant="top" src="https://communityfile-dre.op.hicloud.com/FileServer/getFile/cmtybbs/001/846/916/2640091000001846916.20210108100008.95004473186047509440677078584216:50530410025055:2800:66A15F9FA8B0B9EBBBCAAFF9487D2E7BC60CC2C110596750FE72E07BF403A61E.jpg"  style={{height:"250px", width:"250px"}}/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Security;
