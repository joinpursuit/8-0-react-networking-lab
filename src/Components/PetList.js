import React from "react";


const PetList = ({ employee, pets }) => {
  
  const filteredPets = pets.filter((pet) => pet.employeeId === employee.id);
  const filtereredPetlist = filteredPets.map((thisPet) => thisPet.name);


  return (
    <aside className="pets-list">
      {filteredPets.length ? (
        <p>{filtereredPetlist.join(", ")}</p>
      ) : (
        <article>No pets listed for this employee.</article>
      )}
    </aside>
  );
};

export default PetList;
