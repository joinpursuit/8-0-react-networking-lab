import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export class EmployeeList extends Component {
  constructor(){
    super();
    this.state = {
      employeeData: []
    }
  }

  componentDidMount(){
    fetch('https://pursuit-veterinarian.herokuapp.com/api/employees')
      .then((res) => {
        return res.json();
      }).then((data) => {
        this.setState({
          employeeData: data
        })
      })
  }

  render(){
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          <Employee employeeData = {this.state.employeeData}/>
        </section>
      </main>
    );
  }
};

export default EmployeeList;
