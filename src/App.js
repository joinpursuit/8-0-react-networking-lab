import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import EmployeeList from './Components/EmployeeList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  getEmployees = () => {
    fetch('https://vet-lab-8-4.herokuapp.com/api/employees')
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          employees: json,
        });
      });
  };

  componentDidMount() {
    this.getEmployees();
  }

  render() {
    return (
      <div>
        <NavBar />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}
