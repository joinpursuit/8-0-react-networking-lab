import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      listemployees: [],
    };
  }
  componentDidMount() {
    fetch("https://serene-tundra-77911.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((obj) => {
        this.setState({ listemployees: [...obj] });
      })
      .catch((error) => console.log(`Error :`, error));
  }
  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.listemployees.map((e, i) => (
            <Employee key={i} employee={e} />
          ))}
        </section>
      </main>
    );
  }
}

export default EmployeeList