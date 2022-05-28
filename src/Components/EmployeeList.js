import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeInfo: [],
    };
  }

  componentDidMount() {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res) => {
        return res.json();
      })
      .then((Data) => {
        this.setState({ employeeInfo: Data });
      });
  }

  render() {
    let allEmployees = this.state.employeeInfo.map((employee) => {
      return <Employee key={employee.id} each={employee} />;
    });

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{allEmployees}</section>
      </main>
    );
  }
}

export default EmployeeList;
