import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const URL = "https://vet-resource-api-9-2.herokuapp.com";

export const EmployeeList = () => {
  const [employeeArr, setEmployeeArr] = useState([]);

  console.log(URL);
  useEffect(() => {
    fetch(`${URL}/api/employees`)
      .then((response) => response.json())
      .then(setEmployeeArr);
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeArr.map((employee) => {
          return (
            <Employee employee={employee}/>
          )
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
