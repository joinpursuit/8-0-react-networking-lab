export const PetList = (props) => {
  const {filteredPetData, notFound} = props
  
  let petlist = filteredPetData.map((pet)=>{
    return `${pet.name}, `
  })
  return (
    <aside className="pets-list">
      {filteredPetData.length ?  petlist : <p>{notFound}</p>}
    </aside>
  );
};

export default PetList;
