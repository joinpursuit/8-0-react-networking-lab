import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {

  const [employees, setEmployees] = useState([])

  function fetchDoctors() {
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
    fetchDoctors()
  }, [])

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
       {employees.map((employee) => {
        return <Employee employee={employee} key={employee.id}/>
       })}
      </section>
    </main>
  );
};

export default EmployeeList;
