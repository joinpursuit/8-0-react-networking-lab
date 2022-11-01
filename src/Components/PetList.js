import { useState, useEffect } from "react";

export const PetList = ({id}) => {

  const [pets, setPets] = useState([])
  
  let names = pets.filter((pet) => {
   return pet.employeeId === id
  })

  names = names.map((object) => {
    return object.name
  })
  
  names = names.join(", ")

  function fetchPets() {
    fetch("https://vet-api-1.onrender.com/api/pets")
    .then((response) => response.json())
    .then((json) => {
      setPets(json);
    })
    .catch((err) => {
      console.log("error fetching pets");
    });
  }

  useEffect(() => {
    fetchPets()
  }, [])

  return (
    <aside className="pets-list">
      {names.length ? 
      <p>{names}</p>
    : <p>No pets listed for this employee.</p>}
    </aside>
  );
};

export default PetList;
