import { useState, useEffect } from "react";

export const PetList = ({ id }) => {
  const [pets, setPets] = useState([]);

function getPets() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPets(json);
      })
      .catch((err) => {
        console.log("error fetching employees");
      });
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <aside className="pets-list">
      {pets.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        pets.map((pet, i) => {
          return pet.employeeId === id ? <p key={i}>{pet.name}</p> : null;
        })
      )}
    </aside>
  );
};

export default PetList;
