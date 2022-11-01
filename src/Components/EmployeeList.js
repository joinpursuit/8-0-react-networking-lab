import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({employees}) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employees.map(({firstName, lastName, prefix, postfix, title, id}) => 
            <Employee
            key = {id}
            firstName ={firstName}
            lastName = {lastName}
            prefix = {prefix}
            postfix = {postfix}
            title = {title}
            id = {id} 
            />
          )
        }
        {/* Figure out how to do without hard coding */}
      </section>
    </main>
  );
};

export default EmployeeList;
