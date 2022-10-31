import React from "react";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ pets, PetList }) => {
  const [employees, setEmployees] = useState([]);

  function updateEmployees() {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((res) => res.json())
      .then((json) => {
        setEmployees(json);
      })
      .catch((err) => {
        console.log("Error fetching employees!");
      });
  }

  useEffect(() => {
    updateEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees &&
          employees.map((em) => {
            return <Employee key={em.id} em={em} id={em.id} pets={pets} />;
          })}
      </section>
    </main>
  );
};

export default EmployeeList;
