import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


// create a function called getEmplpoyees to get employess with fetch and employees endpoint - return an array of 5 objects
// assign the returned data to the Component EmployeeList
const getEmployees = () => {
  fetch(`https://vet-lab-8-4.herokuapp.com/api/employees`)
    .then(data => data.json())
    .then(json => {console.log(json)})
    .then(json => {EmployeeList(json)})
}
// MUST CALL THE FETCH FUNCTION BEFORE THE COMPONENT
getEmployees()


// assign the returned data - json- to the EmployeeList Component as a prop
export const EmployeeList = (json) => {
  console.log(json)
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {/* create a variable to add the prop to the child Component Employee */}
      <Employee json={json}></Employee>
      </section>
    </main>
  );
};

export default EmployeeList;