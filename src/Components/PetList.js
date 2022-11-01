import { callFetch } from "../helperFunctions";
import { useState, useEffect } from "react";

export const PetList = ({id}) => {
  // Declare state for pets
  const [pets, setPets] = useState([])
  
  const filteredPets = pets.filter(({employeeId}) => id === employeeId )
  const names = filteredPets.map(({name}) => name)
  useEffect(() => {callFetch(`api/pets`,setPets)}, [])
   
  return (
      <aside className="pets-list">
        {
        filteredPets.length ? <p>{names.join(`, `)}</p> :
        <p>No pets listed for this employee.</p>
        }
    </aside>
    )
};


export default PetList;
