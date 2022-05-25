import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: null,
    };
  }

  updateEmployeesData = () => {
    fetch("https://serene-tundra-77911.herokuapp.com/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ employees: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.updateEmployeesData();
  }

  render() {
    const { employees } = this.state;

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employees &&
            employees.map((employee) => {
              return <Employee key={employee.id} employeeData={employee} />;
            })}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
