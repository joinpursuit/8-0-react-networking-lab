import { useState, useEffect } from "react";

export const PetList = ({employeeID}) => {
  
  const [pets, setPets] = useState([])

  function petList() {
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${employeeID}`)
      .then((response) => response.json())
      .then((petList) => {
        setPets(petList);
        console.log(petList);
      })
      .catch((error) => {
        console.log("Fetching Employees");
      });
  }
  useEffect(() => {
    console.log("Effect Here");
    petList();
  }, [employeeID]);
  
  useEffect(()=>{
    // setShow(!show)
  }, [])
  //
  
  return (
  <>
  {
    pets.map((pet)=>{
      return(
    <aside className="pets-list">
      <p>{pet.name}</p>{}<p>No pets listed for this employee.</p>
    </aside>

      )
    })
  }
  </>);
};

export default PetList;
