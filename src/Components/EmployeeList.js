import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeData: [],
      petsData: [],
    };
  }

  componentDidMount() {
    this.handleEmployees();
    this.handlePets();
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

  handlePets() {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ petsData: data });
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
          pet={this.state.petsData.filter((petItem) => {
            return petItem.employeeId === item.id;
          })}
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
