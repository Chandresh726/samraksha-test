import React from "react";
import {
  Navbar,
  Container,
  Form,
  Dropdown,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

function Header(props) {
  let type = localStorage.getItem("Type");
  let Auth = localStorage.getItem("Auth");
  const activateLogout = () => {
    localStorage.clear();
    window.location.href = "https://samraksha.herokuapp.com/";
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="logo.png"
              width="40"
              height="40"
              className="d-inline-block align-middle"
            />{" "}
            Samraksha
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {type === "student" ? (
                <>
                  <Nav.Link href="/viewqr">Generate QR</Nav.Link>
                  <Nav.Link href="http://teleuniv.in/netra-web/attendance">
                    View Attendance
                  </Nav.Link>
                  <Nav.Link href="http://teleuniv.in/netra-web/attendance">
                    View Timetable
                  </Nav.Link>
                </>
              ) : (
                <></>
              )}
              {type === "parent" ? (
                <>
                  <Nav.Link href="/moment">View Movement</Nav.Link>
                  <Nav.Link href="/viewcomplaints">View Complaint</Nav.Link>
                  <Nav.Link href="http://teleuniv.in/netra-web/attendance">
                    View Attendance
                  </Nav.Link>
                  <Nav.Link href="#lite">View Notification</Nav.Link>
                </>
              ) : (
                <></>
              )}
              {type === "teacher" ? (
                <>
                  <Nav.Link href="/addcomplaint">Add Complaints</Nav.Link>
                  <Nav.Link href="http://teleuniv.in/drona-web/Attendance">
                    Mark Attendance
                  </Nav.Link>
                  <Nav.Link href="http://teleuniv.in/drona-web/timetable">
                    Time table
                  </Nav.Link>
                </>
              ) : (
                <></>
              )}

              {type === "admin" ? (
                <NavDropdown
                  title="Register New User"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/addstudent">
                    Student
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/addteacher">
                    Teacher
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <></>
              )}
              {type === "admin" ? (
                <>
                  <Nav.Link href="/addclasses">ManageClasses</Nav.Link>
                  <Nav.Link href="#addclasses">ManageTimetable</Nav.Link>
                </>
              ) : (
                <></>
              )}

              {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {Auth ? (
              <Nav>
                <Nav.Link style={{ margin: "auto 0" }} href="/profile">
                  {localStorage.getItem("Name").toUpperCase()}
                </Nav.Link>
                <Nav.Link onClick={activateLogout}>
                  <Button style={{ margin: "0px" }} variant="outline-secondary">
                    Logout
                  </Button>
                </Nav.Link>
              </Nav>
            ) : (
              <></>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
          SAMRAKSHA</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Timetable</Nav.Link>
          <Nav.Link href="#features">View Attendance</Nav.Link>
          <Nav.Link href="#pricing">Generate QR</Nav.Link>
        </Nav>
        <div className="justify-content-end">
        <img
          alt=""
          src="https://w7.pngwing.com/pngs/722/101/png-transparent-computer-icons-user-profile-circle-abstract-miscellaneous-rim-account.png"
          width="45"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        <Button onClick={activateLogout} variant="outline-danger">Logout</Button>
        </div> 
        </Container>
      </Navbar> */}
    </div>
  );
}

export default Header;
