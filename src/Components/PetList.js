export const PetList = ({ ownPets }) => {
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
