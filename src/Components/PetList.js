export const PetList = ({pets, doctorId}) => {
  const employeePets = pets.filter(({employeeId}) => 
    doctorId === employeeId
  )
  
  return (
   
    employeePets.map(({name}) => {
      return (
        <aside className="pets-list">
        <p>{name}</p>
      </aside>
      )
    })
    // <aside className="pets-list">
    //   <p>No pets listed for this employee.</p>
    // </aside>
  );
};

export default PetList;
