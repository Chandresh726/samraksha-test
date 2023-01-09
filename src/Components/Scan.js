import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import {
  Container,
  Button,
  Card,
  Form,
  Row,
  Col,
  Alert,
  Collapse,
} from "react-bootstrap";
import Header from "./Header";

const Scan = () => {
  const [flag, setFlag] = React.useState(false);
  const [data, setData] = React.useState();
  const [studentdata, setstudentdata] = React.useState({});
  const [purpose, setpurpose] = React.useState("");
  const [desc, setdesc] = React.useState("Campus");
  const [checkin, setcheckin] = React.useState({});
  const [checkout, setcheckout] = React.useState({});

  const getdata = (data) => {
    let rollno = data.split("@")[0];
    // let rollno = "503";
    console.log(rollno);
    fetch("https://samraksha-api.onrender.com/api/getstudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rollno: rollno }),
    })
      .then((res) => res.json())
      .then((data) => {
        setstudentdata(data);
      });
  };
  const scanagain=()=>{
    setData({});
    setFlag(false);
  }
  const handlecheckin = () => {
    let pdate = data.split("@")[1];

    var date = new Date();
    var time = date.toLocaleString("en-GB");
    fetch("https://samraksha-api.onrender.com/api/checkin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rollno: data.split("@")[0],
        time: time.replace(/\s+/g, ""),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setcheckin(data);
        if (data.status == "success") {
          setFlag(false);
        }
      });
  };
  const handlecheckout = () => {
    var date = new Date();
    var time = date.toLocaleString("en-GB");
    fetch("https://samraksha-api.onrender.com/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rollno: data.split("@")[0],
        time: time.replace(/\s+/g, ""),
        description: desc,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setcheckout(data);
        if (data.status == "success") {
          setFlag(false);
        }
      });
  };
  if (!flag)
    return (
      <div>
        <Header />
        <div>
          <Alert
            variant="success"
            style={{ fontWeight: "700", fontSize: "20px", textAlign: "center" }}
          >
            Scan Qr
          </Alert>
          <div className="cam">
            <BarcodeScannerComponent
              // width={400}
              // height={800}
              onUpdate={(err, result) => {
                if (result) {
                  setFlag(true);
                  setData(result.text);
                  getdata(result.text);
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div>
        <Header />
        <Container>
          {studentdata.status == "success" ? (
            <div className="form">
              <Card>
                <div className="pageheading">Student Data</div>
                <Card.Body style={{ fontWeight: "500" }}>
                  <Row>
                    <Col>
                      <Card.Text>Name:</Card.Text>
                    </Col>
                    <Col align="center">{studentdata.name}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text>Class:</Card.Text>
                    </Col>
                    <Col align="center">{studentdata.class}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text>Email:</Card.Text>
                    </Col>
                    <Col align="center">{studentdata.email}</Col>
                  </Row>
                  <Form style={{ margin: "20px 0" }}>
                    <Form.Group>
                      <Form.Select
                        aria-label="Default select example"
                        value={purpose}
                        onChange={(e) => {
                          setpurpose(e.target.value);
                          setdesc(e.target.value);
                        }}
                      >
                        <option value="Campus">Campus</option>
                        <option value="Holiday">Holiday</option>
                        <option value="Out Of Campus">Out of Campus</option>
                      </Form.Select>
                    </Form.Group>

                    {purpose == "Out Of Campus" ? (
                      <Form.Group className="mb-3" controlId="formBasicblog">
                        <Form.Label>
                          <h3 style={{ fontWeight: "700" }}>
                            Please enter the description
                          </h3>
                        </Form.Label>
                        <Form.Control
                          value={desc}
                          as="textarea"
                          rows={10}
                          placeholder="Share your reson here"
                          onChange={(e) => setdesc(e.target.value)}
                        />
                      </Form.Group>
                    ) : (
                      <div></div>
                    )}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <Button
                        style={{ margin: "10px", flex: "left" }}
                        variant="primary"
                        onClick={handlecheckin}
                      >
                        Check In
                      </Button>
                      <Button
                        style={{ margin: "10px", flex: "right" }}
                        variant="primary"
                        onClick={handlecheckout}
                      >
                        Check Out
                      </Button>
                    </div>
                    <Button
                      style={{ margin: "0px" , width:"100%" }}
                      variant="success"
                      onClick={scanagain}
                    >
                      Scan Again
                    </Button>
                  </Form>
                  {checkin.status == "already checked in" ? (
                    <Alert key="alert" variant="alert">
                      Already Checked In
                    </Alert>
                  ) : (
                    <div></div>
                  )}
                  {checkout.status == "already checked out" ? (
                    <Alert key="alert" variant="alert">
                      Already Checked Out
                    </Alert>
                  ) : (
                    <div></div>
                  )}
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div></div>
          )}
        </Container>
      </div>
    );
  }
};

export default Scan;
