import { useEffect, useState } from "react";

export const PetList = ({id}) => {

  const [pet, setPet] = useState([]);

  function fetchRequest() {
    //fetch api if employeeid = id key (api/pets?employeeId="+id)
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId="+id)
      .then((response) => response.json())
      .then((petData) => setPet(petData));
  }

  console.log(pet);
  useEffect(() => {
    fetchRequest();
  }, []);


  
  return (
    <aside className="pets-list">
      {pet.length ? 
      pet.map(({id,name}) => {
        return (
          <ul>
            <li key={id}>{name}</li>
          </ul>
         )
      }) :  <p>No pets listed for this employee.</p>
      }
     
    </aside>
  );
};

export default PetList;
