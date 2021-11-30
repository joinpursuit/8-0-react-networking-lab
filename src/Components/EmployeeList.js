import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super()
    this.state = {
      allEmployees: [],

    }
  }

  componentDidMount() {
    
    fetch(`https://vet-api-8-1.herokuapp.com/api/employees`)
      .then((response) => response.json())
      .then((data) => {
        
        this.setState({ 
          allEmployees: data
         });
      })
      .catch((err) => {
        console.log("This doctor has no pets", err);
      });
  };



  render() {
    const employeeArr = this.state.allEmployees.map((employee) => {
      return (
        <Employee
        key={employee.id}
        id={employee.id}
        title={employee.title}
        first={employee.firstName}
        last={employee.lastName}
        prefix={employee.prefix}
        postfix={employee.postfix}
        />
      );
    });
    
    return (
  <main>
    <h2>All Staff</h2>
    <section className="employee-list">
      {employeeArr}
    </section>
  </main>
  );
  }
};

export default EmployeeList;
