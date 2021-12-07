import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }
  
   getEmployeeData = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((data) => {
          this.setState(
            { employees: data});
          })   

      .catch((error) => {
        console.log(error);
    });
  };

  componentDidMount = () => {
    this.getEmployeeData();
  }
 
    render() {
      const employeeResults = this.state.employees.map((employee) => {
        return (
          <Employee 

            id={ employee.id }
            title={ employee.title }
            first={ employee.firstName }
            last={ employee.lastName }
            prefix={ employee.prefix }
            postfix={ employee.postfix } />
        );
      });

      return (
          <main>
          <h2>All Staff</h2>
            <section className="employee-list">
            { employeeResults }
            </section>
          </main>
          );
       } 
    }
  

export default EmployeeList;