import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = ({ employee, index }) => {
  const [showData, setShowData]= useState(false)

  function togglePet() {
    setShowData(!showData);
  }


  return (
    <article className="employee" key={index}>
    <h3>
      {employee.prefix} {employee.firstName} {employee.lastName}
      {!employee.postfix ? null : ", " + employee.postfix}
    </h3>
    <h4>{employee.title}</h4>
    <button onClick={togglePet}>
      {showData ? "Hide Pets" : "Show Pets"}
    </button>
    {showData && <PetList employee={employee} index={index} />}
    </article>
  );
};

export default Employee;
