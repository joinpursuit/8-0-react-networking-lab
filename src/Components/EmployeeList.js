import React from 'react';
import Employee from './Employee';
import './EmployeeList.css';

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    fetch('https://serene-tundra-77911.herokuapp.com/api/employees')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ employees: data });
      });
  }
  render() {
    const { employees } = this.state; // destructure

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employees &&
            employees.map((employee) => {
              return <Employee key={employee.id} employee={employee} />;
            })}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
