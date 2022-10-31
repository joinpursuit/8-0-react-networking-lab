import React, { useState, useEffect } from "react";

export const PetList = ({ id, toggle, setToggle, cid }) => {
  const [currPets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  function matchPet(id, currPets, toggle) {
    let list = currPets.filter((pet) => id === pet.employeeId);
    if (toggle !== true) {
    } else if (toggle === true) {
      if (list.length > 0) {
        return (
          <ul>
            {list.map((pet) => (
              <li>{pet.name}</li>
            ))}
          </ul>
        );
      } else if (list.length === 0) {
        return <p>No pets listed for this employee.</p>;
      }
    }
  }
  return <aside className="pets-list">{matchPet(id, currPets, toggle)}</aside>;
};

export default PetList;
