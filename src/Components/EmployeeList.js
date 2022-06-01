import React, {Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  
  
    return (
      <main>
        <section className="employee-list">
          {this.props.employees.map(employee => <Employee employee={ employee}/>)}
          
        </section>
      </main>
    );
  };
}

