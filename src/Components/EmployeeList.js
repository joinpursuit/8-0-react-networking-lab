import React from "react";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  function getEmployees() {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((data) => data.json())
      .then((data) => setEmployees(data))
      .catch((err) => {
        console.log("ERR");
      });
  }

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((worker, index) => {
          return <Employee worker={worker} key={index} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
