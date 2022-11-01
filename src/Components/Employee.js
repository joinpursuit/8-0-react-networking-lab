import PetList from "./PetList";
import { useState } from "react";
import "./Employee.css";

export const Employee = ({ employee, id }) => {
  const [showPets, setShowPets] = useState(false);

  function handleClick() {
    setShowPets(!showPets);
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix} {employee.firstName} {employee.lastName}
        {employee.postfix && ", " + employee.postfix}{" "}
      </h3>
      <h4>{employee.title}</h4>

      <button onClick={() => handleClick(!showPets)}>
        {showPets ? "Hide pets" : "Show pets"}
      </button>
      {showPets ? <PetList id={id} /> : null}
    </article>
  );
};

export default Employee;
