import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employees, pets}) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        
        {
          employees.map(({firstName, lastName, prefix, postfix, title, id}) => 
            <Employee
            firstName ={firstName}
            lastName = {lastName}
            prefix = {prefix}
            postfix = {postfix}
            title = {title}
            id = {id} 
            pets = {pets}/>
          )
        }
  
      </section>
    </main>
  );
};

export default EmployeeList;
