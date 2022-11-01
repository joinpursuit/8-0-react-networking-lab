import { useState } from "react";


export const PetList = ({employee, pets}) => {

  console.log("pets = ", pets)
const filteredPets = pets.filter((pet) =>
  pet.employeeId === employee.id)
// console.log("This is the filteredPets list ",filteredPets)
  // console.log("This is the employee list ",employee)
  const filtereredPetlist = filteredPets.map((thisPet) => thisPet.name)


  return (
    <aside className="pets-list">
    
    {
     filteredPets.length ? <p>{filtereredPetlist.join(", ")}</p>
     :
     <article>No pets listed for this employee.</article>
    }
      
    </aside>
  );
};



export default PetList;


