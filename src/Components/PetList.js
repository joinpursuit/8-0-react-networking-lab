import { useState, useEffect } from "react";

export const PetList = ({id}) => {
  
  const [pets, setPets] = useState([])
  let petList = pets.filter((pet) => {return pet.employeeId === id}).map((pet) => `${pet.name}, `)

  useEffect(() => {
    fetch(`https;//vet-api-1.onrender.com/api/pets`)
    .then((res) => res.json())
    .then((res) => {
      setPets(res)
    })
    .catch((err) => console.log(err)) 
  }, [])

  return (
    <aside className="pets-list">
      {petList.length ?<p>{petList}</p> : <p>No pets listed for this employee.</p>}
    </aside>
  );
};

export default PetList;
