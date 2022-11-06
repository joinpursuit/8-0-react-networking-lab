import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
// import react from "react";

export const EmployeeList = ({data, pets}) => {

  console.log(data.map(employee => employee
    ))

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {
          data.map(employee => {
            return(
              <Employee key={employee.id} employee={employee} pets={pets}/>
            )
          })
            
        }
      </section>
    </main>
  );
};

export default EmployeeList;
