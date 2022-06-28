import React from "react";
import { Component } from "react/cjs/react.production.min";
import Employee from "./Employee";
import "./EmployeeList.css";

// export const EmployeeList = () => {
//   return (
//     <main>
//       <h2>All Staff</h2>
//       <section className="employee-list">
//         <Employee />
//       </section>
//     </main>
//   );
// };

// export default EmployeeList;

export default class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employeeList: [],
    };
  }

  componentDidMount() {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then((data) => data.json())
      .then((json) => {
        // console.log(json)

        this.setState({
          employeeList: json,
        });
      });
  }

  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.employeeList.map((employee) => (
            <Employee employee={employee} />
          ))}
        </section>
      </main>
    );
  }
}
