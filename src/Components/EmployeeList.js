import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


class EmployeeList extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
    }

  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data: data })
      })
      .catch((err) => {
        console.log("No data found")
      })
    
  }

  
  render() {

    const allEmployees = this.state.data.map((Employee) => {
      return <Employee person = {Employee}/>
    })

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {allEmployees}
          return <Employee/>
        </section>
      </main>
    );
  };

}

export default EmployeeList;
