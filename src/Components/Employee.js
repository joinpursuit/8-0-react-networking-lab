import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee, pets }) => {
  const { firstName, lastName, prefix, postfix, title, id } = employee;

  const [showPets, setShowPets] = useState(false);

  return (
    <article className="employee">
      <h3>{`${prefix}. ${firstName} ${lastName}, ${postfix}`}</h3>
      <h4>{title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      {showPets && <PetList pets={pets} id={id} />}
    </article>
  );
};

export default Employee;
