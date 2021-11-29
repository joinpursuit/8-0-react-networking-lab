import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends Component {
  render(){
    return(
      <>
        <NavBar />
        <EmployeeList />
      </>
    )
  }
}

export default App;
