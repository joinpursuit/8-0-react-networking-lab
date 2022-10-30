import { useState, useEffect } from "react";
export const PetList = ({ employeeID }) => {
  const [ownPets, setOwnPets] = useState([]);

  useEffect(() => {
    console.log("fetching pets");
    fetch(
      "https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId=" +
        employeeID
    )
      .then((res) => res.json())
      .then((pets) => setOwnPets(pets));
  }, [employeeID]);

  return (
    <aside className="pets-list">
      <p>
        {ownPets.length
          ? ownPets.map((pet) => pet.name).join(",")
          : "No pets listed for this employee."}
      </p>
    </aside>
  );
};

export default PetList;
