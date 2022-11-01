export const PetList = ({ pets, showPets }) => {
  return (
    <aside className="pets-list">
      <p>{showPets && (pets ? pets : "No pets listed for this employee!")}</p>
    </aside>
  );
};

export default PetList;
