export const PetList = ({ showPets, pets, employeeId }) => {

  function byEmployeeId(pets){
    return pets.employeeId === employeeId ? pets : null
  }

  const match = pets.filter(byEmployeeId).map((pet) => {
      return pet.name
  })

  return (
    <aside className="pets-list">
      {showPets && <p>{match.length > 0 ? match.join(', ') : "No pets listed"}</p>}
    </aside>
  );
};

export default PetList;
