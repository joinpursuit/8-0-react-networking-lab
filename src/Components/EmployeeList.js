import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const employeeAPI = () => {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((response) => response.json())
      .then((json) => {
        setEmployees(json);
      })
      .catch((err) => {
        console.log("error fetching employee");
      });
  };

  useEffect(() => {
    employeeAPI();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            id={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            prefix={employee.prefix}
            postfix={employee.postfix}
            title={employee.title}
          />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
