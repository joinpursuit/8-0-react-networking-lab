import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('https://vet-api-8-1.herokuapp.com/api/employees')
      .then((response) => response.json())
      .then((employeesArr) => {
        this.setState({ employees: employeesArr })
      })
      .catch((error) => {
        console.log('error fetching data')
      })
  }

  render() {
    const employees = this.state.employees.map((employee) => {
      return (
        <Employee person={employee} />
      )
    })

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employees}
        </section>
      </main>
    );
  }
};

export default EmployeeList;
