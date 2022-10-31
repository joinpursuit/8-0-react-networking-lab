import { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((res) => res.json())
      .then((res) => setEmployees(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(
          ({ id, firstName, lastName, postfix, prefix, title }) => (
            <Employee
              key={id}
              firstName={firstName}
              lastName={lastName}
              postfix={postfix}
              prefix={prefix}
              title={title}
              id={id}
            />
          )
        )}
      </section>
    </main>
  );
};

export default EmployeeList;
