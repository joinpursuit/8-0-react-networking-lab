import { useEffect, useState } from 'react';

export const PetList = ({ employee }) => {
  const [pets, setPets] = useState({});
  function fetchPet() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
        console.log(setPets(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchPet();
  }, [employee.id]);

  const getName = pets.map((pet) => pet.name);
  // const getId = pets.filter((pet) => pet.employeeId === employee.id);

  console.log(getName);
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;
