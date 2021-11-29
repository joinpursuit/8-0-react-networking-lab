import { Component } from 'react';
import Employee from './Employee';
import './EmployeeList.css';

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    fetch('https://vet-api-8-1.herokuapp.com/api/employees')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          employees: json,
        });
      })
      .catch((err) => {
        console.log('Error fetching employees');
      });
  }

  render() {
    const { employees } = this.state;
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employees.map((e) => (
            <Employee info={e} />
          ))}
        </section>
      </main>
    );
  }
}

export default EmployeeList;
