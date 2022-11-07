export const PetList = ({ pets }) => {
  const petsNames = pets.map( pet => pet.name ) // ['perrito1', 'gato']
  const petsNamesString = petsNames.join(', ') 
  return (
    <aside className="pets-list">
      <p>
        {petsNamesString ? petsNamesString : "No pets listed for this employee."}
      </p>
    </aside>
  );
};

export default PetList;
