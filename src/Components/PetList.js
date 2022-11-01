import { useEffect, useState } from "react";

export const PetList = ({id}) => {
  const [pets, setPets] = useState([])

  useEffect(()=>{
    fetch('https://vet-api-1.onrender.com/api/pets'
    )
    //Ask Carlos what he meant before because can't see how to do without this. 
    .then((res) => res.json())
    .then((res) => setPets(res)) 
  }, [])
  return (
    <aside className="pets-list">
     {setPets.length ? <p>
         {pets.filter((pet) => {return pet.employeeId === id}).map((pet)=> `${pet.name}, `)}</p>: <p>No pets listed for this employee</p>}
    </aside>
  );
};

export default PetList;
