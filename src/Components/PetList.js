import React, { useState, useEffect } from "react";

export const PetList = ({ id }) => {
  const [pets, setPets] = useState([]);

  const petApi = () => {
    fetch("https://vet-api-1.onrender.com/api/pets")
      .then((response) => response.json())
      .then((json) => {
        setPets(json);
      })
      .catch((err) => {
        console.log("error fetching pets");
      });
  };

  useEffect(() => {
    petApi();
  }, []);

  const employeesPet = () => {
    return pets.filter((pet) => id === pet.employeeId).map((pet) => pet.name);
  };
  return (
    <aside className="pets-list">
      <p>
        {employeesPet().length > 0
          ? employeesPet().join(", ")
          : "No pets listed."}
      </p>
    </aside>
  );
};

export default PetList;
