import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employees,pets}) => {
// Declare state for on click
const [clicked, setClicked] = useState(false)
// function for handling onClick
function handleClick() {
  setClicked(!clicked)
}
  return (
    
      employees.map(({firstName, lastName, prefix, postfix, title, id}) => {
        return(
          <article className="employee">
            <h3>{prefix? prefix : null} {firstName} {lastName} {postfix ? `, ${postfix}` : null}</h3>
            
            <h4>{title}</h4>
            
            <button
            onClick={() => {handleClick()}}>{clicked ? `Hide Pets`: `Show Pets`}</button>
            
            {clicked && <PetList
            pets ={pets} 
            EmployeeId = {id}/>}
          </article>
        )
      })
    
    // <article className="employee">
    //   <h3>Staff Member Name</h3>
    //   <h4>Staff Member Title</h4>
    //   <button>Show Pets</button>
    //   <PetList />
    // </article>
  );
};

export default Employee;
