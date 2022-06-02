import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  getEmployees() {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/employees`)
      .then((data) => data.json())
      .then((json) => {
        console.log("EMP".json)
        this.setState({
          employees: json,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getEmployees();
    console.log( this.getEmployees())

  }

  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className='employee-list'>
          {this.state.employees.map((employee) => {
            return <Employee key={employee.id} employee={employee} />;
          })}
        </section>
      </main>
    );
  }
}
