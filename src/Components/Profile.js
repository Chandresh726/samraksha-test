import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  Form,
  Row,
  Col,
  Alert,
  Collapse,
  Table,
} from "react-bootstrap";
function Profile(props) {
  const usertype = localStorage.getItem("Type");
  let body = { rollno: localStorage.getItem("rollno") };
  let name = { name: localStorage.getItem("Name") };
  const [studentprofile, setstudentprofile] = useState({});
  const [parentprofile, setparentprofile] = useState({});
  const [teacherprofile, setteacherprofile] = useState({});
  useEffect(() => {
    fetch("https://samraksha-api.onrender.com/api/getstudentprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setstudentprofile(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://samraksha-api.onrender.com/api/getparentprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setparentprofile(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://samraksha-api.onrender.com/api/getteacherprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    })
      .then((res) => res.json())
      .then((data) => {
        setteacherprofile(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Header />
      {usertype === "student" ? (
        <Container>
          {studentprofile.status == "success" ? (
            <div className="form">
              <Card>
                <div className="pageheading">Student Data</div>
                <Card.Img
                  variant="top"
                  src="https://png.pngitem.com/pimgs/s/74-741993_customer-icon-png-customer-icon-transparent-png.png"
                  style={{ height: "230px", width: "230px", margin: "auto" }}
                />
                <Card.Body style={{ fontWeight: "500" }}>
                  <Table bordered hover>
                    <tbody>
                      <tr>
                        <td align="center">Name:</td>
                        <td align="center">{studentprofile.name}</td>
                      </tr>
                      <tr>
                        <td align="center">Roll Number:</td>
                        <td align="center">{studentprofile.rollno}</td>
                      </tr>
                      <tr>
                        <td align="center">Class:</td>
                        <td align="center">{studentprofile.class}</td>
                      </tr>
                      <tr>
                        <td align="center">Email:</td>
                        <td align="center">{studentprofile.email}</td>
                      </tr>
                      <tr>
                        <td align="center">Age:</td>
                        <td align="center">{studentprofile.age}</td>
                      </tr>
                      <tr>
                        <td align="center">Parent Number:</td>
                        <td align="center">{studentprofile.parentnumber}</td>
                      </tr>
                      <tr>
                        <td align="center">Class Number:</td>
                        <td align="center">{studentprofile.classnumber}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div></div>
          )}
        </Container>
      ) : (
        <></>
      )}
      {usertype === "parent" ? (
        <Container>
          {parentprofile.status == "success" ? (
            <div className="form">
              <Card>
                <div className="pageheading">Parent Data</div>
                <Card.Img
                  variant="top"
                  src="https://png.pngitem.com/pimgs/s/74-741993_customer-icon-png-customer-icon-transparent-png.png"
                  style={{ height: "230px", width: "260px", margin: "auto" }}
                />
                <Card.Body style={{ fontWeight: "500" }}>
                  <Table bordered hover>
                    <tbody>
                      <tr>
                        <td align="center">Name:</td>
                        <td align="center">{parentprofile.name}</td>
                      </tr>
                      <tr>
                        <td align="center">Roll Number:</td>
                        <td align="center">{parentprofile.rollno}</td>
                      </tr>
                      <tr>
                        <td align="center">Phone Number:</td>
                        <td align="center">{parentprofile.number}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div></div>
          )}
        </Container>
      ) : (
        <></>
      )}
      {usertype === "teacher" ? (
        <Container>
          {teacherprofile.status == "success" ? (
            <div className="form">
              <Card>
                <div className="pageheading">Teacher Data</div>
                <Card.Img variant="top" src="https://png.pngitem.com/pimgs/s/74-741993_customer-icon-png-customer-icon-transparent-png.png" style={{height:"230px", width:"260px", margin:"auto"}}/>
                <Card.Body style={{ fontWeight: "500" }}>
                  <Table bordered hover>
                    <tbody>
                      <tr>
                        <td align="center">Name:</td>
                        <td align="center">{teacherprofile.name}</td>
                      </tr>
                      <tr>
                        <td align="center">Subject:</td>
                        <td align="center">{teacherprofile.subject}</td>
                      </tr>
                      <tr>
                        <td align="center">Email:</td>
                        <td align="center">{teacherprofile.email}</td>
                      </tr>
                      <tr>
                        <td align="center">Age:</td>
                        <td align="center">{teacherprofile.age}</td>
                      </tr>
                      <tr>
                        <td align="center">Class Teacher:</td>
                        <td align="center">{teacherprofile.classteacher}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div></div>
          )}
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Profile;
