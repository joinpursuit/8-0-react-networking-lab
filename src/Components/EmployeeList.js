import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = (employee, index) => {


  const [employees, setEmployees] = useState([]);

  function fetchEmployees() {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((res) => res.json())
      .then((json) => {
        setEmployees(json);
      })
      .catch((err) => {
        console.log("Error");
      });
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employees.map((employee, index) => {
          return <Employee employee={employee} key={index} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
