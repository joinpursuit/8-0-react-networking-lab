import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import data from "../data.json";

export const EmployeeList = () => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {data.employees.map((e) => (
          <Employee e={e} />
        ))}{" "}
      </section>
    </main>
  );
};

export default EmployeeList;
