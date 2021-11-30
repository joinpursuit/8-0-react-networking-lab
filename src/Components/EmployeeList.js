import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { Component } from "react/cjs/react.production.min";

class EmployeeList extends Component {
  constructor() {
    super()
    this.state = { 
      employees: [],
      title: null,
      clicked: false,
    }
  }

  componentDidMount() {
    fetch('https://vet-api-8-1.herokuapp.com/api/employees').then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({ employees: json})
    })
    .catch((err) => {
      console.log('error fetching data')
    })
  }


  render() {

    const { employees } = this.state
    const employeeCards = employees.map((employee) => <Employee key={employee.id} employee={employee} />)



    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employeeCards}
        </section>
      </main>
    );
  }
};

export default EmployeeList;
