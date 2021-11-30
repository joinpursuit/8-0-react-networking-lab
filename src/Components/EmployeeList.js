import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export default class EmployeeList extends React.Component {
  constructor(){
    super()
    this.state = {
      employeeList: [],
    }
  }

  componentDidMount() {
    fetch('https://vet-api-8-1.herokuapp.com/api/employees')
    .then(response => response.json())
    .then(obj => {
      this.setState({employeeList: [...obj]})
    })
    .catch(console.log)
  }


  render(){
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.employeeList.map((el, i)=> <Employee key={i} employee={el}/>)}
        </section>
      </main>
    )
  }
};

