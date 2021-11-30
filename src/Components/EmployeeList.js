import React from "react";
import { Component } from "react/cjs/react.production.min";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      empData: [],
    };
  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ empData: data });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    const { empData } = this.state;
    const employees = empData.map((emp) => {
      return <Employee key={emp.id} emp={emp} />;
    });
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{employees}</section>
      </main>
    );
  }
}

export default EmployeeList;
