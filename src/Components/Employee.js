import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({employee}) => {
 const [showPet, setShowPet] = useState(false)
const {id, firstName, lastName, prefix, postfix,title} = employee

const toggleShowPets = ()=>{
  setShowPet(!showPet)
}

  return (
    <article className="employee">
      <h3>{prefix} {firstName} {lastName}{postfix === '' ? '':`, ${postfix}`}</h3>
      <h4>{title}</h4>
      <button onClick={() =>{toggleShowPets()}}>Show Pets</button>
      {showPet ? <PetList id={id}/>: null}
    </article>
  );
};

export default Employee;
