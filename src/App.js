import { Component } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

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
