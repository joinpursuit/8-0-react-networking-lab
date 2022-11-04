import { useState, useEffect } from "react";

export const PetList = ({ employeeID }) => {

  const [showPets, setShowPets] = useState(false)

  const BASE_URL = "https://vet-api-1.onrender.com/api/pets?employeeId="
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch(BASE_URL + employeeID)
      .then((res) => res.json())
      .then((res) => {
        setPets(res)
      })
      .catch((error) => console.log(error))    
  }, [])

  function handleClick () {
    setShowPets(!showPets)
  }

  function showDetails () {
    pets.map((pet, i) => {
      if (i === pets.length -1){
        return `${pet.name}`
      } else if (i < pets.length -1 ){
        return `${pet.name}, `
      } else if (pets === []){
        return "No pets listed for this employee"
      }
    }) 
  }

  return (
    <aside className="pets-list">
      <button onClick={handleClick}>Show Pets</button>
      {
        showPets ? (
          <p>
            {
            pets.map((pet, i) => {
              if (i === pets.length -1){
                return `${pet.name}`
              } else if (i < pets.length -1 ){
                return `${pet.name}, `
              } else if (!pet){
                return "No pets listed for this employee"
              }
            }) 
            }
          </p>
        ) :
        null
      }
    </aside>
  );
};

export default PetList;
