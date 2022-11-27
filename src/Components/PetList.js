export const PetList = ({ employeesPets }) => {
  return (
    <aside className="pets-list">
      {employeesPets.length > 0 ? (
        employeesPets.map((pet) => pet.name).join(", ")
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
