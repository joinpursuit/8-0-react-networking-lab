import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [EmployeeArray, setEmployeeArray] = useState([]);

  const getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then(data => data.json())
      .then(json => {
        setEmployeeArray(json);
      })
  }
  useEffect(() => {
    getEmployees()
  }, []
  )

  return (
    <>
      <h2>All Staff</h2>
      <main>
      <section className="employee-list">
        {EmployeeArray.map(employee => {
          console.log(employee);
          return (<Employee key={employee.id} employee={employee} />)
        })}
      </section>
      </main>
    </>
  );

};

export default EmployeeList;
