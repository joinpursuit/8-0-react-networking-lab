import { useEffect, useState } from "react";
export const PetList = ({ em, id }) => {
  const [pets, setPets] = useState([]);

  function updatePets() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${id}`)
      .then((res) => res.json())
      .then((json) => {
        setPets(json);
      })
      .catch((err) => {
        console.log("Error fetching employees!");
      });
  }

  useEffect(() => {
    updatePets();
  }, []);

  return (
    <aside className="pets-list">
      {pets.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        pets.map((pet) => {
          return pet.employeeId === id ? <p>{pet.name}</p> : null;
        })
      )}
    </aside>
  );
};

export default PetList;
