//import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import Employee from "./Employee";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employeeList: [],
    };
  }

  listEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then((employees) => employees.json())
      .then((employees) => {
        this.setState({
          employeeList: employees,
        });
      })
      .catch((err) => alert("ERROR"));
  };

  componentDidMount() {
    this.listEmployees(); // To call the listEmployees as soon as component is loaded
  }

  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.employeeList.map((employee) => {
            return (
              <Employee
                key={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
                title={employee.title}
                prefix={employee.prefix}
                postfix={employee.postfix}
                id={employee.id}
              />
            );
          })}
        </section>
      </main>
    );
  }
}
