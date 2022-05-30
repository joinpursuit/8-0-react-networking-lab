import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <section className="employee-list">
        {employees.map((employee) => {
          return <Employee key={employee.id} employee={employee} />;
        })}
      </section>
    </div>
  );
};

export default EmployeeList;
