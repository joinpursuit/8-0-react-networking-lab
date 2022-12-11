import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


const EmployeeList = ({ employees, pets }) => {

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee">
        {employees && employees.map((employee) => {
          return <Employee key={employee.id} employee={employee} pets={pets} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
