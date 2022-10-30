import { useEffect, useState } from "react";
import "./PetList.css";

const api_address = "https://vet-resource-api-9-2.herokuapp.com/";

export const PetList = ({employee_id}) => {
  const [pets,updatePets] = useState([]);

  useEffect(()=>{
    fetch(`${api_address}api/pets?employeeId=${employee_id}`)
    .then((response) => response.json())
    .then((data) => {
      updatePets(data);
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  },[]);

  return (
    <aside className="pets-list">
      
        {pets.length>0
          ?pets.map(el=>el.name).join(",")
          :<span>No pets listed for this employee.</span>
        }
      
    </aside>
  );
};

export default PetList;
