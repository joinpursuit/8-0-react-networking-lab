import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  //* fecth API
  function EmployeeList() {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((response) => response.json())
      .then((list) => {
        setEmployee(list);
        console.log(list);
      })
      .catch((error) => {
        console.log(error, "Fetching Employees");
      });
  }
  useEffect(() => {
    console.log("Effect Here");
    EmployeeList();
  }, [employee.id]);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employee && employee.map((el) => <Employee el={el} id={el.id} />)}
      </section>
    </main>
  );
};

export default EmployeeList;
