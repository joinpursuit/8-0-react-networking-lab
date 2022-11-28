export const PetList = ({ employeesPets }) => {
  return (
    <aside className="pets">
      <ul>
        {employeesPets.length > 0 ? (
          employeesPets.map((pet) => <li key={pet.id}>{pet.name}</li>)
        ) : (
          <li>No pets listed for this employee.</li>
        )}
      </ul>
    </aside>
  );
};

export default PetList;
