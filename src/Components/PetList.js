import { useState, useEffect } from "react";

export const PetList = ({ employeeId }) => {
  const basePets = `https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId=${employeeId}`;

  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    fetch(basePets)
      .then((response) => response.json())
      .then((pets) => {
        setMyPets(pets);
      });
  }, []);

  function findPets() {
    return myPets.map((pet) => pet.name).join(",");
  }

  return (
    <aside className="pets-list">
      <p>{myPets.length ? findPets() : "No pets listed for this employee."}</p>
    </aside>
  );
};

export default PetList;
