import { useState, useEffect } from "react";

export const PetList = ({ employeeID }) => {
  const [pets, setPets] = useState([]);
  function petList() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${employeeID}`)
      .then((response) => response.json())
      .then((petsList) => {
        setPets(petsList);
      })
      .catch((error) => {
        console.log("Fetching Employees");
      });
  }

  useEffect(() => {
    // console.log("Effect Here");
    petList();
  }, [employeeID]);

  return (



          <aside className="pets-list">
{
  pets.length>0 ? pets.map(pet=>(pet.name)+", "): <p>No pets listed for this employee.</p>
}
          </aside>

  );
};

export default PetList;
