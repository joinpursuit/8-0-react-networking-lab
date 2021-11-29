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
    this.handleEmployeeData();
  }

  handleEmployeeData=()=>{
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        // console.log(data);
        // console.log(data[0].firstName);
        
        this.setState({
          staffList: data,
        })
      })
  }

  render(){
    employeeCards = data.map((employee)=>{
      return (
        <Employee 
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
          <Employee />
        </section>
      </main>
    )
  }
}

export default EmployeeList;
