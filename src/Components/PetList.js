import React from "react";

export default function PetList({petList}){

  let pets = petList.map((pet) => {
    return pet.name
  })

    return (
      <div>
        <p>{pets.join(", ")}.</p>
      </div>
    );
  }