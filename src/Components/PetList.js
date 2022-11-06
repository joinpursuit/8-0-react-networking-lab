export const PetList = ({ petArr }) => {
  console.log(petArr);
  return (
    <aside className="pets-list">
      {
        petArr.length ?
        <p>{petArr.map(pet => pet.name).join(", ")}</p> : <p>No pets listed for this employee.</p>
      }
    </aside>
  );
};

export default PetList;
