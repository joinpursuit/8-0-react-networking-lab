export const PetList = ({ employee: { id }, petsArr }) => {
  const matchID = (pet) => {
    let arr = [];
    for (let pets of pet) {
      if (id === pets.employeeId) {
        arr.push(pets.name);
      }
    }
    return arr.join(", ");
  };

  return (
    <aside className="pets-list">
      <p>
        {matchID(petsArr) === ""
          ? "No pets listed for this employee."
          : matchID(petsArr)}
      </p>
    </aside>
  );
};

export default PetList;
