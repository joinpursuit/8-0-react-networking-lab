import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({pets, employees}) => {

  const allEmployees = employees.map((employee) => {
    return <Employee key={employee.id} pets={pets} employee={employee}/>
  })

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {allEmployees}
      </section>
    </main>
  );
};

export default EmployeeList;
