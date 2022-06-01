import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeesList: [],
    };
  }

 getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
    .then(data => data.json())
    .then(employees => {
     this.setState({
       employeesList: employees
     })
    })
    .catch(err => console.log(err))
  }

 componentDidMount() {
  this.getEmployees()
 }
render() {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {(this.state.employeesList).map((employees) => {
          return (<Employee 
            employeeId={employees.id}
            prefix={employees.prefix}
            firstName={employees.firstName} 
            lastName={employees.lastName}
            postfix={employees.postfix}
            title={employees.title}/>)
        })}
 
      </section>
    </main>
  );
};

}
