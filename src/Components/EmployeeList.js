import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employees, pets}) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee)=>
          <Employee employee={employee} pets={pets}/>
        )}
      </section>
    </main>
  );
};

export default EmployeeList;
