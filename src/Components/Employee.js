import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);

  return (
    <article className="employee">
      <h3>
        {employee.prefix + " " + employee.firstName + " " + employee.lastName}
        {employee.postfix && ", " + employee.postfix}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>
        {showPets ? "Hide " : "Show "} Pets
      </button>
      {showPets && <PetList employeeID={employee.id} />}
    </article>
  );
};

export default Employee;
