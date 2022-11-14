import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";
import { getEmployeePet } from "../api/fetch";

export const Employee = ({ employee }) => {
  const [pets, setPets] = useState([]);
  const [petSwitch, setPetSwitch] = useState(false);
  const handleToggle = () => {
    if (pets.length === 0)
      getEmployeePet(employee.id).then((data) => setPets(data));
    else setPets();
    setPetSwitch(!petSwitch);
  };
  const postFix = employee.postfix ? `, ${employee.postfix}` : "";
  return (
    <article className="employee">
      <h3>
        {employee.prefix} {employee.firstName} {employee.lastName}
        {postFix}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={handleToggle}>{petSwitch ? "Hide" : "Show"} Pets</button>
      {petSwitch && <PetList pets={pets.map((pet) => pet.name)} />}
    </article>
  );
};

export default Employee;
