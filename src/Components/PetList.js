import React, { useEffect, useState } from "react";

const PetList = ({ id, showPets }) => {
  const [employeePets, setEmployeePets] = useState([]);

  const getEmployeesPets = (id) => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then(data => data.json())
      .then(json => {
        setEmployeePets(json)
      })
  }
  useEffect(() => {
    getEmployeesPets(id)
  }, []
  )

  return (
    <aside className="pets-list">
      {showPets ? (employeePets.length) > 0 ?
        employeePets.map(pet => <p key={Math.random(Math.floor * 100)}>{pet.name}</p>) :
        <p>No pets listed for this employee</p> :
        null}
    </aside>
  );


};

export default PetList;
