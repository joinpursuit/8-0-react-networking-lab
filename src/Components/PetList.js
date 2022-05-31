export const PetList = ({employees:{ id },pets}) => {
  const ids = (animals) => {
    let animalArr = []
    animals.map((animal) => {
      if (id.includes(animal.employeeId))
      animalArr.push(animal.name)
    })
    return animalArr
  }
  
  return (
    <aside className="pets-list">
         <p>
        {ids(pets) === '' ? 'No pets listed for this employee.' : ids(pets)}
      </p>
    </aside>
  );
};

export default PetList;
