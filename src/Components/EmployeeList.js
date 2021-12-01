import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      staffList: [],
    }
  }

  componentDidMount() {
    this.showStaff();
  }

  showStaff = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
    .then(res => res.json())
    .then((staffData) => {
      this.setState({
        staffList: staffData,
      })
    })
  }


  render() {
    let staffArr = this.state.staffList.map((staff) => {
        return <Employee key = {staff.id} staff = {staff} />
    })

    return(
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{staffArr}</section>
      </main>
    )
  }

}


export default EmployeeList;
