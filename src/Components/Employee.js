import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({firstName, lastName, prefix, postfix, title, id}) => {
// Declare state for on click toggle
const [clicked, setClicked] = useState(false)

// function for handling onClick
function handleClick() {
 setClicked(!clicked)
}

  return (
    
    <article className="employee">
      
      <h3>{prefix? prefix : null} {firstName} {lastName}{postfix ? `, ${postfix}` : null}</h3>
      <h4>{title}</h4>
      
      <button
      onClick={() => {handleClick()}}>{!clicked ? `Show Pets` : `Hide Pets`}</button>

      {clicked && <PetList
      id = {id} 
      />}
     
    </article>
  );
};

export default Employee;
