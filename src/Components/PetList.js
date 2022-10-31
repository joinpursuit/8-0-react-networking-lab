export const PetList = ({pets, EmployeeId}) => {
  
  
  return (
    pets.map(({name, id, employeeId}) => {
      return (
        <aside className="pets-list">
        <p>{EmployeeId === employeeId ? name : null}</p>
      </aside>
      )
    })
    // <aside className="pets-list">
    //   <p>No pets listed for this employee.</p>
    // </aside>
  );
};

export default PetList;
