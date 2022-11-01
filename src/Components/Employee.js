import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({employee}) => {

  const [showPets, setShowPets] = useState(false);
  let fullName = ""

  function properName(employee) {
    if (employee.prefix) {
      fullName = `${employee.prefix} ${employee.firstName} ${employee.lastName}`
    } else if (employee.postfix) {
      fullName = `${employee.firstName} ${employee.lastName}, ${employee.postfix}`
    } else {
      fullName = `${employee.firstName} ${employee.lastName}`
    }
    return fullName
  }

  properName(employee)


  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      <div id={showPets ? "show" : "hidden"}>
      <PetList id={employee.id}/>
      </div>
    </article>
  );
};

export default Employee;
