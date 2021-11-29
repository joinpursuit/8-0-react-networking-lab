import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ employees: data });
      });
  }

  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.employees.map((emp) => (
            <Employee employee={emp} key={emp.id} />
          ))}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
