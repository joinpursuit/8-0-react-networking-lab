//import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
//import { Component, useState } from "react/cjs/react.production.min";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = ({ employee }) => {
  const [employeeList, setEmployeeList] = useState([]);

  const listEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then((employees) => employees.json())
      .then((employees) => {
        setEmployeeList(employees);
        // this.setState({
        //   employeeList: employees,
        // });
      })
      .catch((err) => alert("ERROR"));
  };

  useEffect(() => {
    listEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeList.map((employee) => {
          return (
            <Employee
              key={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              title={employee.title}
              prefix={employee.prefix}
              postfix={employee.postfix}
              id={employee.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default EmployeeList;

//export default class EmployeeList extends Component {
// constructor() {
//   super();
//   this.state = {
//     employeeList: [],
//   };
// }
