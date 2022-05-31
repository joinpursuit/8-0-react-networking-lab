import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = (props) => {
  const { employeeArray} = props;
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employeeArray.map((employee) => {
          return <Employee employee={employee} key={employee.id} />
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
