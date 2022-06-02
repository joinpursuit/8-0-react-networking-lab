import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  getEmployee = () => {
    fetch("http://serene-tundra-77911.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((json) => this.setState({ employees: json }))
      .catch((err) => {
        console.log("There is an error");
      });
  };

  componentDidMount() {
    this.getEmployee();
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <NavBar />
        <EmployeeList employees={employees} />
      </div>
    );
  }
}
