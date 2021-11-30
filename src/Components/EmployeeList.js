import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor(){
    super();

    this.state = {
      staffList: [],
    }
  }

  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        this.setState({
          staffList: data,
        })
      })
  }

  render(){
    const employeeCards = this.state.staffList.map((employee)=>{
      return (
        <Employee key={employee.id}
          id={employee.id}
          firstName={employee.firstName} 
          lastName={employee.lastName}
          prefix={employee.prefix}
          postfix={employee.postfix}
          title={employee.title}
        />
      )
    })

    return(
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employeeCards}
        </section>
      </main>
    )
  }
}

export default EmployeeList;
