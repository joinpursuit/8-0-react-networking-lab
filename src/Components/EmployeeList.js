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
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          employees: [...data],
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className='employee-list'>
          {this.state.employees.map((employee, index) => (
            <Employee key={index} employee={employee} />
          ))}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
