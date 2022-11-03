export const PetList = ({pets}) => {

  const found = pets.map((pet) => pet.name)

  return (
    <aside className="pets-list">
      <p> {found.length ? found.join(", ") : "No pets listed"}</p>
    </aside>
  );
};

export default PetList;
