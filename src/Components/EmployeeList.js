import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const basePeople = "https://vet-resource-api-9-2.herokuapp.com/api/employees";
  

  useEffect(() => {
    getPeople();
  }, []);

  const [list, setList] = useState([]);

  function getPeople() {
    fetch(basePeople)
      .then((response) => response.json())
      .then((people) => {
        setList(people);
      });
  }

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {list.map((employee) => {
          return (<Employee employee={employee} />);
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
