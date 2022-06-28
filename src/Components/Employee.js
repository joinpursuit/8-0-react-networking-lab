import PetList from "./PetList";
import React, { useState } from "react";
import "./Employee.css";

const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);
  const { id, firstName: FName, lastName: LName, prefix, postfix, title } = employee;
  return (
    <article id={id} className="employee">
      <h3> {postfix ? `${prefix} ${FName} ${LName}, ${postfix}` :
        `${prefix} ${FName}  ${LName}`}
      </h3>
      <h4> {!title ? "Staff Member Title" : `${title}`}</h4>
      <button
        onClick={() => setShowPets(!showPets)}>{!showPets ? 'Show Pets' : 'Hide Pets'}</button>
      <PetList id={id} showPets={showPets} />
    </article>
  )
}

export default Employee;