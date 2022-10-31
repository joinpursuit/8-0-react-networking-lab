
export const PetList = ({pets,id}) => {
  const filteredPets = pets.filter(({employeeId}) => 
    id === employeeId
  )
  const names = filteredPets.map(({name}) => name) 
    return (
      <aside className="pets-list">
        
        {
        filteredPets.length ? <p>{names.join(`, `)}</p> :
          <p>No pets listed for this employee.</p>
        }
    </aside>
    )
};


export default PetList;
