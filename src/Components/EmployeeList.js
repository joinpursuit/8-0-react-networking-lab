import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({empData,petData}) => {
console.log(empData)


  
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <Employee 
        empData={empData}
        petData={petData}
        />
      </section>
    </main>
  );
};

export default EmployeeList;
