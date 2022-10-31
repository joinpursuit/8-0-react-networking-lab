import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employees, individualEmployeeId}) => {

  // create a function to get the employees 
  // create 


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        { employees&& 
              employees.map((individualEmployee)=>{
                return  <Employee  individualEmployeeId={individualEmployee.id}  key={individualEmployee.id} individualEmployee={individualEmployee} />

                } )
                }
      </section>
    </main>
  );
};

export default EmployeeList;
