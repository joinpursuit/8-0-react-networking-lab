import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employeeList: []
    }
  }

// handle employeeData
componentDidMount() {
  fetch(`https://pursuit-veterinarian.herokuapp.com/api/employees`)
  .then((res) => {
    return res.json()
  })
  .then((employeeData) => {
    console.log(employeeData)
    this.setState({
      employeeList: employeeData
    })
  })
 }

  render() {
    // map through employees to create each card
    // render each card

    let displayStaff = this.state.employeeList.map((employee) => {
      return <Employee key={employee.id} employee={employee} />
    })

    return (
      <main>
       <h2>All Staff</h2>
       <section className="employee-list">
         {displayStaff}
       </section>
     </main>
    )
  }
}

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

export default EmployeeList;
