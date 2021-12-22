import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();

    this.state = {
      employeeList: [],
    };
  }

  componentDidMount = () => {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        this.setState({
          employeeList: data,
        });
      })
      .catch((err) => {
        console.log("error fetching employee");
      });
  };

  render() {
    const { employeeList } = this.state;
    let employeeInfo = employeeList.map((employee) => {
      return (
        <Employee
          key={employee.id}
          employee = {employee}
        />
      );
    });
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employeeInfo}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
