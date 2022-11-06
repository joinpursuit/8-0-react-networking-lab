import { useState, useEffect } from "react";
import EmployeeList from "./EmployeeList";

export const PetList = ({employee}) => {

  let [pets, setPets] = useState([]);

  function petsFetchRequest(){
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets")
    .then((response) => response.json())
    .then(result => setPets(result));
  }

  useEffect(() => {
    petsFetchRequest();
   }, []);

  let employeePets = pets.filter(pet => pet.employeeId === employee.id)
  employeePets = employeePets.map(pet => pet.name).join(", ");

  return (
    <aside className="pets-list">
      <p> {employeePets === "" ? "No pets listed" : employeePets} </p>
    </aside>
  );
};

export default PetList;

// import { useEffect, useState } from "react";
// // import "./PetList.css";

// const api_address = "https://vet-resource-api-9-2.herokuapp.com/";

// export const PetList = ({employee_id}) => {
//   const [pets,updatePets] = useState([]);

//   useEffect(()=>{
//     fetch(`${api_address}api/pets?employeeId=${employee_id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       updatePets(data);
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   },[]);

//   return (
//     <aside className="pets-list">
      
//         {pets.length>0
//           ?pets.map(el=>el.name).join(",")
//           :<span>No pets listed for this employee.</span>
//         }
      
//     </aside>
//   );
// };

// export default PetList;
