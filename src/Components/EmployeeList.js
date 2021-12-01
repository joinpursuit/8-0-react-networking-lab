import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeData: [],
    };
  }

  componentDidMount() {
    this.handleEmployees();
  }

  handleEmployees() {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ employeeData: data });
      });
  }

  render() {
    let employeeComponentArray = this.state.employeeData.map((item) => {
      return (
        <Employee
          key={item.id}
          name={
            item.prefix +
            " " +
            item.firstName +
            " " +
            item.lastName +
            (item.postfix ? ", " + item.postfix : " ")
          }
          title={item.title}
          id={item.id}
        />
      );
    });
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{employeeComponentArray}</section>
      </main>
    );
  }
}

export default EmployeeList;
