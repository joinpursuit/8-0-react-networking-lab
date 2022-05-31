import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
    constructor () {
      super() 
      this.state = {
        employees: []
      }
    }

    componentDidMount() {
      let baseURL = 'https://serene-tundra-77911.herokuapp.com/api/employees'

      fetch(baseURL)
        .then((response) => response.json())
        .then((data) => this.setState(() => {
          return { employees : data}
        }))
      .catch((error) => 
        console.log('Error Msg', error)
      )
    }
  
  
  render () {
    const employeeCards = this.state.employees.map((employee, index) => {
      return <Employee key={index} employee={employee}/>
    })
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
