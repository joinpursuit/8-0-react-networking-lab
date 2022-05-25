export const PetList = (props) => {
  const { pets } = props;
  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        pets.map((pet) => {
          return <p key={pet.id}>{pet.name}</p>;
        })
      ) : (
        <p>No pets listed</p>
      )}
    </aside>
  );
};

export default PetList;
