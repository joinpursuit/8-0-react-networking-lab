import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ employees, fetchData }) => {
  //********* RETURN *******/
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return (
            <>
              <Employee employee={employee} fetchData={fetchData} />
            </>
          );
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
