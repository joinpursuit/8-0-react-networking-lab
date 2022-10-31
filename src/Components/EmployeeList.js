import React, { useEffect, useState } from 'react';
import Employee from './Employee';
import './EmployeeList.css';

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  function fetchEmployees() {
    fetch('https://vet-api-1.onrender.com/api/employees')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchEmployees();
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
