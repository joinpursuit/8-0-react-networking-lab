import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export default class EmployeeList extends React.Component {
  constructor(){
    super()
    this.state = {
      listemployees: [],
    }
  }
  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
    .then(response => response.json())
    .then(obj => {
      this.setState({listemployees: [...obj]})
    })
    .catch(console.log);
  }
  render(){
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {this.state.listemployees.map((el, i)=> <Employee key={i} employee={el}/>)}
      </section>
    </main>
  );
 }
};
