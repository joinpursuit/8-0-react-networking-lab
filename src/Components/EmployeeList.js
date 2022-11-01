import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  function makeFetchRequest() {
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((response) => setEmployees(response));
  }

  useEffect(() => {
    makeFetchRequest();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(
          ({ firstName, lastName, prefix, postfix, title, id }) => {
            return (
              <Employee
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                prefix={prefix}
                postfix={postfix}
                title={title}
              />
            );
          }
        )}
      </section>
    </main>
  );
};

export default EmployeeList;
