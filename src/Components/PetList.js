import { useState, useEffect } from "react";

export const PetList = ({ fetchData, employee }) => {
  console.log(employee.id);
  const PET_ENDPOINT = `/api/pets?employeeId=${employee.id}`;

  // ********* STATES *********/
  let [petData, setPetData] = useState([]);

  useEffect(() => {
    fetchData(PET_ENDPOINT, setPetData);
    console.log(petData);
  }, []);

  //********* RETURN *********/
  return (
    <aside className="pets-list">
      {petData.map((pet) => {
        return petData !== [] ? <p>{`${pet.name}, `}</p> : null;
      })}

      <p>No pets listed.</p>
    </aside>
  );
};

export default PetList;
