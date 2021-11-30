import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor(){
    super()
    this.state={
      employeeData: [],
      
    }
  }

  componentDidMount(){
    this.handleEmployeeData()
  }

  handleEmployeeData = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
    .then((res)=> res.json())
    .then((data)=>{
      this.setState({
        employeeData: data
      });
    }); 
  }

render(){
  let employeeDisplay = this.state.employeeData.map((employee)=>{
    return <Employee key={employee.id} e={employee}/>
  })

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeDisplay}
      </section>
    </main>
  );

}
};

export default EmployeeList;
