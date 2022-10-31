import { useEffect, useState } from 'react';

export const PetList = ({ employee }) => {
  const [pets, setPets] = useState([]);
  function fetchPet() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchPet();
  }, [employee.id]);

  return (
    <aside className="pets-list">
      <>
        {pets.length === 0 ? (
          <p>No pets listed for this employee.</p>
        ) : (
          pets.map((pet) =>
            pet.employeeId === employee.id ? <p>{pet.name}</p> : null
          )
        )}
      </>
    </aside>
  );
};

export default PetList;
