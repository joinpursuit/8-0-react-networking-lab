import { useState, useEffect } from "react";


export const PetList = ({individualEmployeeId}) => {
  
  // const petsInfo = pets.filter((pet)=>{pets.employeeId})
  const [pets,setPet]= useState([])


function petList(){
  fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${individualEmployeeId}`)
  .then((response) => response.json())
  .then((json) => {
   setPet(json)
  })
  .catch((err) => {
    console.log("error fetch");
  });
}

useEffect(()=>{
  petList()
}, [])


  return (
     <aside className="pets-list">
      {pets.length === 0 ? <p>No pets listed for this employee.</p> : pets.map((individualPet )=>{
         return individualPet.employeeId === individualEmployeeId ? <p>{individualPet.name}</p>: null})}
    </aside>
      )
}
export default PetList;