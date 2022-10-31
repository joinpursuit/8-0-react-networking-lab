import { useState, useEffect } from "react";


export const PetList = ({ employeeID }) => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/pets?employeeId=" + employeeID)
    .then((response) => response.json())
    .then((json) => {
      setPets(json);
    })
    .catch((err) => {
      console.log("error fetching image");
    });
  }, [employeeID])

      return (
      
      <aside className="pets-list">
        <p>{pets.length > 0 ? pets.map((pet) => pet.name).join(',') : "No pets listed for this employee"}</p>
      </aside>

   
  );
};

export default PetList;
