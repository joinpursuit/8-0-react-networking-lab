import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = ({ employee, pets }) => {
  const [employeesPets, setEmployeesPets] = useState([]);
  const [clicked, setClicked] = useState(false);

  function handleOnClick() {
    setClicked(!clicked);
  }

  function getEmployeesPets() {
    setEmployeesPets(pets.filter((pet) => pet.employeeId === employee.id));
  }

  useEffect(() => {
    getEmployeesPets();
  }, []);

  return (
    <article className="employee">
      <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName}${
        employee.postfix ? ", " + employee.postfix : ""
      }`}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleOnClick}>Show Pets</button>
      {clicked ? <PetList employeesPets={employeesPets} /> : null}
    </article>
  );
};

export default Employee;
