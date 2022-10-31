import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employees,pets}) => {
// Declare state for on click toggle
const [clicked, setClicked] = useState(false)

// function for handling onClick
function handleClick(e) {
  setClicked(!clicked)
  }


  return (
    
      employees.map(({firstName, lastName, prefix, postfix, title, id}) => {
        return(
          <article className="employee">
            <h3>{prefix? prefix : null} {firstName} {lastName} {postfix ? `, ${postfix}` : null}</h3>
            
            <h4>{title}</h4>
            
            <button
            id = {id}
            onClick={(event) => {handleClick(event)}}>Show Pets</button>
            
            {clicked && <PetList
            pets ={pets} 
            doctorId = {id}
            />}
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
