import React from "react";

export default function PetList({petList}){

  let pets = petList.map((pet) => {
    return pet.name
  })

    return (
      <div>
        {pets.length ? <p>{pets.join(", ")}</p> : <p>No pets listed for this employee.</p>}
      </div>
    );
  }