import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ employee, pets }) => {
  return (
    <main>
      <h2>All Staff</h2>
      {employee.map(({ id, firstName, lastName, prefix, postfix, title }) => {
        return (
          <section key={id} className="employee-list">
            <Employee
              id={id}
              firstName={firstName}
              lastName={lastName}
              prefix={prefix}
              postfix={postfix}
              title={title}
              pets={pets}
            />
          </section>
        );
      })}
    </main>
  );
};

export default EmployeeList;