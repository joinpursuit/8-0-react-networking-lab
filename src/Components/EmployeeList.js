import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor(){
    super();
    this.state={
      employeesList:[]
    }
  }

  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        this.setState({
          employeesList:data
        })
        // console.log(data);
      })
  }
  render(){
    let employeeList = this.state.employeesList.map((employee) =>{
      return <Employee employee={employee} key={employee.id} />
    } )
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employeeList}
        </section>
      </main>
    );
  }
};

export default EmployeeList;
