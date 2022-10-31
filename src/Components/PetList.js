import { useState, useEffect } from "react";

export const PetList = ({ worker, showPets }) => {
  const [pets, setPets] = useState([]);
  function getPets() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${worker.id}`)
      .then((data) => data.json())
      .then((data) => setPets(data))
      .catch((err) => {
        console.log("ERR");
      });
  }

  console.log(pets);

  useEffect(() => {
    getPets();
  }, [worker.id]);

  return (
    <>
      {pets.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        pets.map((pet, index) => {
          return (
            <aside className="pets-list" key={index}>
              <p>{pet.name}</p>
            </aside>
          );
        })
      )}
    </>
  );
};

export default PetList;
