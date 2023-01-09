import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import "./Components/pages.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main.js";
import Moment from "./Components/Moment.js";
import Login from "./Components/Login.js";
import ViewQR from "./Components/ViewQR.js";
import Scan from "./Components/Scan.js";
import AddTeacher from "./Components/AddTeacher";
import AddStudent from "./Components/Addstudent";
import Manageclassroom from "./Components/Manageclassroom";
import AddComplaints from "./Components/AddComplaints";
import ViewComplaints from "./Components/ViewComplaints";
import Profile from "./Components/Profile";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import botAvatar from "./bot.jpg";
import chat_styles from "./config/chatstyles";

let Auth = localStorage.getItem("Auth");

const Close = () => {
  useEffect(() => {
    console.log("closing");
    // console.log(document.getElementsByClassName("sc-breuTD fxsztj rsc-float-button"));
    // console.log(document.getElementsByClassName("sc-jqUVSM kKRDyr rsc-container"));
    let one = document.getElementsByClassName("fxsztj");
    let two = document.getElementsByClassName("kKRDyr");
    // one.classList.add("cABcPG").remove("fxsztj");
    // one.classList.remove("fxsztj");
    // two.classList.add("jjEfEy").remove("kKRDyr"); 
    // two.classList.remove("kKRDyr") ;
  }, []);
  return <div>BYE</div>;
};
class Get extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      answer: "",
      show: false,
    };
  }
  getResponce(str) {
    fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: str }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.answer);
        this.setState({ show: true });
        this.setState({ answer: data.answer });
      });
  }
  componentWillMount() {
    const { steps } = this.props;
    const { query } = steps;
    this.setState({ query });
    this.getResponce(query.message);
  }

  render() {
    // const { query } = this.state;
    // let ans = this.getResponce(query.message);
    // console.log(ans);
    if (this.state.show) return <div>{this.state.answer}</div>;
    else return <div>Loading ... </div>;
  }
}

Get.propTypes = {
  steps: PropTypes.object,
};

Get.defaultProps = {
  steps: undefined,
};

function App() {
  const steps = [
    {
      id: "0",
      message: "Hello user this is Bot-GABACA!",
      trigger: "3",
    },
    {
      id: "3",
      message: "Please type your querry!!",
      trigger: "query",
    },
    {
      id: "query",
      user: true,
      trigger: "review",
    },
    {
      id: "review",
      component: <Get />,
      asMessage: true,
      trigger: "4",
    },
    {
      id: "4",
      message: "Do you still have any queries?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "No", trigger: "1" },
        { value: 2, label: "Yes", trigger: "3" },
      ],
    },

    {
      id: "1",
      
      message: "Thankyou for using Bot-GABACA!",
      trigger: "6",
    },
    {
      id:"6",
      message:"Do you want to start a new conversation",

      trigger:"2",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/moment" element={<Moment />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/viewqr" element={<ViewQR />} />
          <Route exact path="/scan" element={<Scan />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/addteacher" element={<AddTeacher />} />
          <Route exact path="/manageclasses" element={<Manageclassroom />} />
          <Route exact path="/addcomplaint" element={<AddComplaints />} />
          <Route exact path="/viewcomplaints" element={<ViewComplaints />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      {Auth ? (
        <div>
          <ThemeProvider theme={chat_styles}>
            <ChatBot
              steps={steps}
              headerTitle="Samraksha BOT"
              placeholder="Type away..."
              customDelay="500"
              botAvatar={botAvatar}
              floating="true"
              width="500px"
            />
          </ThemeProvider>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default App;
