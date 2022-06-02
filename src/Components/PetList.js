import { Component } from "react/cjs/react.production.min";

const PetList = ({ pets }) => {
  let petNames = pets.map(pet => pet.name)

  return (
    <aside className="pets-list">

      {petNames.length ? <div>{petNames.join(", ")}</div> : <div>No pets listed for this employee.</div>}
    </aside>
  );
};
 
export default PetList