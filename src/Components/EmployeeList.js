import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      EmployeeArray: [],
    };
  };

  getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then(data => data.json())
      .then(json => {
        this.setState({
          EmployeeArray: json
        })
      })
  }

  componentDidMount() {
    this.getEmployees();
  }

  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.EmployeeArray.map(employee => {
            // console.log(employee);
            return (<Employee key={employee.id} employee={employee} />)
          })}
        </section>
      </main>
    );
  }
};

export default EmployeeList;
