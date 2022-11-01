import { useState, useEffect } from "react";


export const PetList = ({eachEmployeeId}) => {

  const [pets, setPet]= useState([])

function petList(){
  fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${eachEmployeeId}`)
  .then((response) => response.json())
  .then((json) => {
   setPet(json)
  })
  .catch((err) => {
    console.log("Error fetching data.");
  });
}

useEffect(()=>{
  petList()
}, [])
  
  
  return (
    <aside className="pets-list">
      {pets.length === 0 ? <p>No pets listed for this employee.</p> : pets.map((pet)=>{
         return pet.employeeId === eachEmployeeId ? <p>{pet.name}</p>: null})}
    </aside>
    )
  }
export default PetList;
