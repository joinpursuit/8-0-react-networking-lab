const findPetMatches = (pets, id) => {
  const petMatches = [];
  pets.map((pet) => {
    if (pet.employeeId === id) {
      petMatches.push(pet.name);
    }
  });
  return petMatches.join(", ");
};

const PetList = ({ pets, employeeId }) => {
  const petMatches = findPetMatches(pets, employeeId);
  return (
    <aside className="pets-list">
      {petMatches ? <p>{petMatches}</p> : "No pets listed for this employee."}
    </aside>
  );
};

export default PetList;
