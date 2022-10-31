import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ em, pets, id }) => {
  const [showPets, setShowPets] = useState(false);

  function toggleShowPets() {
    setShowPets(!showPets);
  }
  return (
    <article className="employee">
      <h3>
        {em.prefix + " " + em.firstName + " " + em.lastName}
        {em.postfix && ", " + em.postfix}
      </h3>
      <h4>{em.title}</h4>
      <button key={em.id} onClick={() => toggleShowPets(em.id)}>
        {!showPets ? "Show Pets" : "Hide Pets"}
      </button>
      {showPets && <PetList pets={pets} em={em} id={id} />}
    </article>
  );
};

export default Employee;
