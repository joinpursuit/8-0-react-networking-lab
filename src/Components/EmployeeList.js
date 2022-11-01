import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employees, eachEmployeeId}) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employees && employees.map((eachEmployee)=>{
          return  <Employee  eachEmployeeId={eachEmployee.id}  key={eachEmployee.id} eachEmployee={eachEmployee} />
      })
    }
      </section>
    </main>
  );
};

export default EmployeeList;
