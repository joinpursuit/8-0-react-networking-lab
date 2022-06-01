import React, { useState, useEffect } from "react";

const PetList = ({id, showPets}) => {

  const [pets, setPets] = useState([])
  
  const getPets = (id) => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=" + id)
    .then(data => data.json())
    .then(json => {
      setPets(json)
    })
    .catch((error) => {
      alert(error)
    })
  }

    useEffect(() => {
      getPets(id)
    }, []
    )



    return (
      <aside className="pets-list">
        {showPets ? (pets.length > 0 ? pets.map((pet)=> pet.name + ", ") : <p>No pets listed for this employee.</p>): null}
      </aside>
    );
};

export default PetList;
