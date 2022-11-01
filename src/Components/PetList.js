import { useEffect, useState } from "react";

export const PetList = ({ employee, index }) => {

  const [showPet, setShowPet] = useState([])

  function fetchPets(){
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${employee.id}`)
      .then((res) => res.json())
      .then((json) => {
        setShowPet(json);
      })
      .catch((err) => {
        console.log("Error");
      });
  }

  useEffect(()=>{
    fetchPets()

  }, [])


  return (
    <aside className="pets-list">
      {showPet.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        showPet.map((pet, index) => {
          return (
            <aside className="pets-list" key={index}>
              <p>{pet.name}</p>
            </aside>
          );
        })
      )}
    </aside>
  );
};

export default PetList;
