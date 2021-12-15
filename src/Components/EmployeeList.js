import React from "react";
import { Component } from "react/cjs/react.production.min";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component{
  constructor(){
    super()
    this.state={
      employees: []
    }
  }
componentDidMount(){
  fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
  .then((res)=> res.json())
  .then((emp)=>{
    this.setState({
      employees: emp
    })
  })
}

render(){
  console.log(this.state.employees)
  let empList = this.state.employees.map((employee)=>{
      return(
        <Employee 
        key={employee.id}
        prefix={employee.prefix}
        firstName={employee.firstName}
        lastName={employee.lastName}
        title={employee.title}/>
      )

  })

  return (
    <div>
        <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {empList}
        </section>
      </main>
    </div>
    
  );
};
}
  

export default EmployeeList;
