import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employeeData, pets}) => {

  

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employeeData.map((employee) => (<Employee employee={employee} pets={pets}/>))}
      </section>
    </main>
  );
};

export default EmployeeList;
