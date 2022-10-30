import React, { useState, useEffect } from "react";

export const PetList = ({ id, toggle, cid }) => {
  let empList;
  const [currPets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data[0]);
        setPets(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  function matchPet(id, currPets, toggle) {
    console.log(id);
    let list = currPets.filter((pet) => id === pet.employeeId);
    if (toggle === false && cid !== id) {
      return null;
    } else if (list.length > 0) {
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
  return <aside className="pets-list">{matchPet(id, currPets, toggle)}</aside>;
};

export default PetList;
