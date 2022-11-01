import React from "react";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  function getEmployees() {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((response) => response.json())
      .then((json) => {
        setEmployees(json);
      })
      .catch((err) => {
        console.log("error fetching employees");
      });
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees &&
          employees.map((employee, i) => {
            return <Employee employee={employee} id={employee.id} key={i} />;
          })}
      </section>
    </main>
  );
};

export default EmployeeList;
