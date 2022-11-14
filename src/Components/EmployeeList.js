import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { getEmployees} from "../api/fetch"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getEmployees().then((data) => setEmployees(data));
  }, []);
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
          />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
