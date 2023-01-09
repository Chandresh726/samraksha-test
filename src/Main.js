import Login from "./Components/Login";
import Security from "./Components/Security";
import Student from "./Components/Student";
import Teacher from "./Components/Teacher";
import Parent from "./Components/Parent";
import Admin from "./Components/Admin";
import Header from "./Components/Header";

function Main() {
  var Auth = localStorage.getItem("Auth");
  if (!Auth) return <Login />;
  else {
    var type = localStorage.getItem("Type");
    switch (type) {
      case "student":
        return (
          <div className="App">
            <Header />
            <Student />
          </div>
        );
      case "parent":
        return (
          <div className="App">
            <Header />
            <Parent />
          </div>
        );
      case "teacher":
        return (
          <div className="App">
            <Header />
            <Teacher />
          </div>
        );
      case "admin":
        return (
          <div className="App">
            <Header />
            <Admin />
          </div>
        );
      case "security":
        return (
          <div className="App">
            <Header />
            <Security />
          </div>
        );
    }
  }
}

export default Main;
