import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  getEmployees = () => {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ employees: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getEmployees();
  };

  render() {
    const employeeArray = this.state.employees.map((employee) => {
      return (
        <Employee
          key={employee.id}
          id={employee.id}
          title={employee.title}
          first={employee.firstName}
          last={employee.lastName}
          prefix={employee.prefix}
          postfix={employee.postfix}
        />
      );
    });

    return (
      <main className="list">
        <h2>All Staff</h2>
        <section className="employee-list">{employeeArray}</section>
      </main>
    );
  }
}

export default EmployeeList;