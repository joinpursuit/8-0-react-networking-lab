import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [pets, setPets] = useState([]);

  function makeEmployeeFetchRequest() {
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((employees) => {
        setEmployees(employees);
      });
  }

  function makePetsFetchRequest() {
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((pets) => {
        setPets(pets);
      });
  }

  useEffect(() => {
    makeEmployeeFetchRequest();
  }, []);

  useEffect(() => {
    makePetsFetchRequest();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return <Employee key={employee.id} employee={employee} pets={pets} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
