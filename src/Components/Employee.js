import PetList from "./PetList";
import "./Employee.css";

import {useState} from "react";

export const Employee = ({employee, pets}) => {
  const [showPets, setShowPets] = useState(false);

  const {prefix, firstName, lastName, postfix} = employee;
  let fullName = [];
  fullName.push(prefix, firstName, lastName);
  fullName = fullName.join(" ");
  if(postfix !== ""){
    fullName+=`, ${postfix}`;
  }

  return (
    <article key={employee.id} className="employee">
      <h3>{fullName}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => setShowPets(!showPets)}> {!showPets ? "Show Pets" : "Close"} </button>
      { showPets ? <PetList employee={employee}  employee_id={employee.id}/> : ""}
    </article>
  );
};

export default Employee;
