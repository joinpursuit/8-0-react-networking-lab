import { useState } from "react"

export const PetList = ({empID,petData}) => {

  const [petState,setPetState] = useState(false)
    


  const displayPets = () =>{
      
  
        setPetState(!petState)
      
     
    }

// let theymatch = []


let match = petData.map((e)=>{
  
  if (e.employeeId === empID){
    return (
      <aside className="pets-list">
        <p>{e.name}</p>
      </aside>
    );
  }
  return null 
  
})
return(<>
  {petState ? <> <button onClick={displayPets}>Hide Pets</button> 
 {match} </>:
  <button onClick={displayPets}>Show Pets</button>
}
  </>
)

}
export default PetList;
