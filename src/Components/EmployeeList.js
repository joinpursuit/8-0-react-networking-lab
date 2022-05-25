import React, { Component } from 'react';
import Employee from './Employee.js';
import './EmployeeList.css';

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employeeList: [],
    };
  }

  //function to fetch apiData
  // updateEmployeeURL = () => {
  //   console.log('updating the employee url');
  //   fetch('http://serene-tundra-77911.herokuapp.com/api/employees')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.status === 'success') {
  //         this.setState({
  //           employeeList: [...data],
  //         });
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }

  componentDidMount() {
    // this.updateEmployeeURL();
    fetch('http://serene-tundra-77911.herokuapp.com/api/employees')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if (data.status === 'success') {
          this.setState({
            employeeList: [...data],
          });
        // }
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <main>
        <h2>All Staff</h2>
        <section className='employee-list'>
          {this.state.employeeList.map((emp, idx) => (
            <Employee key={idx} employee={emp} />
          ))}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
