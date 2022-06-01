import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

const Employee = ({employee}) =>  {

  const {id, firstName, lastName, prefix, postfix, title} = employee

  const [showPets, setShowPets] = useState(false)


    return (
      <article className="employee">
        <h3>{prefix + " " + firstName + " " + lastName + (postfix ? ", " + postfix: "")}</h3>
        <h4>{title}</h4>
        <button onClick={()=>{setShowPets(!showPets)}}> {showPets ? "Hide Pets" : "Show Pets"} </button>
        <PetList id={id} showPets={showPets}/>
      </article>
    );

};

export default Employee;
