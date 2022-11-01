export const PetList = ({ pets, employee }) => {
  const petsList = pets
    .filter((pet) => pet.employeeId === employee.id)
    .map((pet) => pet.name)
    .join(", ");

  return (
    <aside className="pets-list">
      {petsList ? <p>{petsList}</p> : <p>No pets listed for this employee.</p>}
    </aside>
  );
};

export default PetList;
