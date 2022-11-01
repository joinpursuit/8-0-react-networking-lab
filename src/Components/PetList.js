import { useEffect, useState } from "react";

export const PetList = ({ id }) => {
  const [pets, setPets] = useState([]);

  function makePetsFetchRequest() {
    fetch(
      "https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId=" + id
    )
      .then((response) => response.json())
      .then((response) => setPets(response));
  }

  useEffect(() => {
    makePetsFetchRequest();
  }, []);

  return (
    <aside className="pets-list">
      {pets.length ? (
        pets.map(({ name, id }) => (
          <ul>
            <li key={name + id}>{name}</li>
          </ul>
        ))
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
