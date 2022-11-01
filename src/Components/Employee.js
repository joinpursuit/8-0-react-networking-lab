import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee, pets }) => {
  const [showPets, setShowPets] = useState(false);

  function formatName(employee) {
    const { firstName, lastName, prefix, postfix } = employee;

    if (employee.prefix && employee.postfix) {
      return <h3>{`${prefix} ${firstName} ${lastName}, ${postfix}`}</h3>;
    } else if (employee.prefix) {
      return <h3>{`${prefix} ${firstName} ${lastName}`}</h3>;
    } else if (employee.postfix) {
      return <h3>{`${firstName} ${lastName}, ${postfix}`}</h3>;
    } else return <h3>{`${firstName} ${lastName}`}</h3>;
  }

  return (
    <article className="employee">
      {formatName(employee)}
      <h4>{employee.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      {showPets && <PetList pets={pets} id={employee.id} />}
    </article>
  );
};

export default Employee;
