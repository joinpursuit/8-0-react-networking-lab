import { useState, useEffect } from "react";

export const PetList = ({ employeeID }) => {

  // Declaring state variables
  const [showPets, setShowPets] = useState(false)
  const [pets, setPets] = useState([])

  // Defining base URL with employeeId endpoint
  const BASE_URL = "https://vet-api-1.onrender.com/api/pets?employeeId="

  // useEffect to setPets state for each employee on page load
  useEffect(() => {
    fetch(BASE_URL + employeeID)
      .then((res) => res.json())
      .then((res) => {
        setPets(res)
      })
      .catch((error) => console.log(error))    
  }, [])

  // Function to toggle between true/false state for showPets
  function handleClick () {
    setShowPets(!showPets)
  }

  //React rendering of component
  return (
    <aside className="pets-list">
      <button onClick={handleClick}>Show Pets</button>
      {/* Ternary to show pet details when true */}
      {
        showPets ?
        // Nested ternary to display pet list or "No pets listed" statement
        (
          <p>
            {
             pets.length ?

              pets.map((pet, i) => {
                if (i === pets.length -1){
                  return `${pet.name}`
                } else if (i < pets.length -1 ){
                  return `${pet.name}, `
                }
              }) 
            :
            "No pets listed for this employee."            
            }
          </p>
        ) 
        :
        null
      }
    </aside>
  );
};

export default PetList;
