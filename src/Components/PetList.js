import { useEffect, useState } from "react";

export const PetList = ({id}) => {
  const [pets, setPets] = useState([])
  let filteredPets = pets.filter(pet => pet.employeeId === id).map(pet => `${pet.name}, `)

  useEffect(()=>{
    fetch('https://vet-api-1.onrender.com/api/pets'
    )
    //Ask Carlos what he meant before because can't see how to do without this. 
    .then((res) => res.json())
    .then((res) => setPets(res)) 
  }, [])
  return (
  <aside className="pets-list">
    <p>{filteredPets.length ? filteredPets :'No pets listed.' }</p>
  </aside>
  );
};

export default PetList;
