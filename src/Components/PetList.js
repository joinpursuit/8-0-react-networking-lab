import { useState, useEffect } from "react";
export const PetList = ({id}) => {

  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/pets")
    .then((res) => res.json())
    .then((data) => {

      setPets(data);
    })
    .catch((err) => {
      console.log("error fetching pets.");
    });

   }, [])

let showPets = pets.filter(pet => pet.employeeId === id).map(pet => `${pet.name}, `)

  return (
    <aside className="pets-list">
      <p>{showPets.length ? showPets :'No pets listed for this employee.' }</p>
    </aside>
  );
};

export default PetList;
