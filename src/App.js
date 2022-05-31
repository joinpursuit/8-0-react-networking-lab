import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { Component } from "react/cjs/react.production.min";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <EmployeeList />
      </>
    );
  }
}
