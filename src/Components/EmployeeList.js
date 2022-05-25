import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const getEmployees = () => {
  fetch(`https://vet-lab-8-4.herokuapp.com/api/employees`)
    .then(data => data.json())
    .then(json => {console.log(json)})
    .then(json => {EmployeeList(json)})
}
getEmployees()


export const EmployeeList = (json) => {
  console.log(json)
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <Employee json={json} />
      </section>
    </main>
  );
};

export default EmployeeList;