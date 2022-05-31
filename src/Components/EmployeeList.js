import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      allEmployees: [],
    };
  }

  getAllEmployees = () => {
    // >> Making a request to the API with all the employees
    fetch('https://serene-tundra-77911.herokuapp.com/api/employees')
    .then((data) => data.json())
    .then((employees) => {
      this.setState({
        allEmployees: employees,
      })
    });
  }

  componentDidMount() {
    this.getAllEmployees();
  }

  render() {
    
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
        {(this.state.allEmployees).map(employee => {
          return <Employee employee={employee}/>
        })}
        </section>
      </main>
    );
  }
};

export default EmployeeList;
