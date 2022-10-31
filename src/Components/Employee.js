import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ worker, index }) => {
  const [showPets, setShowPets] = useState(false);

  function togglePets() {
    setShowPets(!showPets);
  }

  return (
    <article className="employee" key={index}>
      <h3>
        {worker.prefix} {worker.firstName} {worker.lastName}
        {!worker.postfix ? null : ", " + worker.postfix}
      </h3>
      <h4>{worker.title}</h4>
      <button onClick={togglePets}>
        {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets ? <PetList worker={worker} /> : null}
    </article>
  );
};

export default Employee;
