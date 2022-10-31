import { useEffect, useState } from "react";

export const PetList = ({ employee }) => {
  const [theirPets, setTheirPets] = useState([]);
  function fetchPet() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((data) => {
        setTheirPets(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchPet();
  }, [employee.id]);

  return (
    <aside className="pets-list">
      {theirPets.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        theirPets.map((pet) => {
          return pet.employeeId === employee.id ? <p>{pet.name}</p> : null;
        })
      )}
    </aside>
  );
};

export default PetList;
