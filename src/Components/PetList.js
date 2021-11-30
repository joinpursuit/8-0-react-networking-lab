const PetList = (props) => {
  const { pets } = props
  // console.log(pets)
  const petList = pets.length ? pets.map((pet) => pet.name).join(", ") : <p>No pets listed for this employee.</p>

  return (
    <aside className="pets-list">
      {petList}
    </aside>
  );
};

export default PetList;
