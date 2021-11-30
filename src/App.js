import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends React.Component {
  render(){return (
    <>
      <NavBar />
      <EmployeeList />
    </>
    );
  }
};

export default App;
