import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((res) => res.json())
      .then((json) => setEmployees(json));
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees &&
          employees.map((employee) => (
            <Employee key={employee.id} employee={employee} />
          ))}
      </section>
    </main>
  );
};

export default EmployeeList;
