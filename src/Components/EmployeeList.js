import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ empArr }) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {empArr.map((employee) => {
          return <Employee employee={employee} key={employee.id} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
