import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { getEmployees } from "../api/veterinaryApi"



export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  
  useEffect(() => {
    getEmployees()
      .then(employeesList => setEmployees(employeesList))
  }, [])

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(employeeData => {
          return (
            <Employee 
              key={employeeData?.id} 
              data={employeeData} 
            />
          )
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
