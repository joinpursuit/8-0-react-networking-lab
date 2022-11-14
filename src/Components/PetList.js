export const PetList = ({ pets }) => {
  return (
    <aside className="pets-list">
      {pets.length === 0 ? (
        <p>No pets listed</p>
      ) : (
        <p>{pets.join(", ")}</p>
      )}
    </aside>
  );
};

export default PetList;
