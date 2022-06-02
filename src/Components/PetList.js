import { Component } from "react/cjs/react.production.min";

const PetList = ({ pets }) => {
  let petNames = pets.map(pet => pet.name)

  return (
    <aside className="pets-list">

      <div>{petNames.join(", ")}</div>
    </aside>
  );
};
 
export default PetList