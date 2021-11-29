import React from "react";
import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((err) => {
        console.log("we aint fetching bro");
      });
  }

  render() {
    const employees = this.state.data.map((employee) => {
      return <Employee person={employee} />;
    });
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          <>{employees}</>
        </section>
      </main>
    );
  }
}

export default EmployeeList;
