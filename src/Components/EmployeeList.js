import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeList: [],
    };
  }

  componentDidMount = () => {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          employeeList: data,
        });
      })
      .catch((err) => {
        console.log("ERROR FETCHING EMPLOYEE!");
      });
  };

  render() {
    const { employeeList } = this.state;
    let employeeInfo = employeeList.map((employee) => {
      return <Employee key={employee.id} employee={employee} />;
    });
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{employeeInfo}</section>
      </main>
    );
  }
}

export default EmployeeList;
