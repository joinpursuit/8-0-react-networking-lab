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

  useEffect(() => {
    getPets();
  }, [showPets]);

  return (
    <>
      {pets
        ? pets.map((pet, index) => {
            return (
              <aside className="pets-list" key={index}>
                <p>{pet ? pet.name : "No pets listed for this employee."}</p>
              </aside>
            );
          })
        : null}
    </>
  );
};

export default PetList;
