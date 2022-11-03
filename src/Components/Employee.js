import { useEffect, useState } from "react";
import PetList from "./PetList";
import "./Employee.css";



export const Employee = ({ employee }) => {
  const [showPets, toggleShowPets] = useState(false);


  const [pets, setPets] = useState([])

  function fetchPets(){
    fetch(`https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId=${employee.id}`).then((response) => response.json()).then((response) => setPets(response))
  }

  useEffect(() => {
    fetchPets();
  }, [showPets])

  function togglePets(e) {
    e.preventDefault();
    toggleShowPets(!showPets);
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix} {employee.firstName} {employee.lastName}
        {employee.postfix ? ", " + employee.postfix : null}{" "}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={togglePets}>Show Pets</button>
      {showPets ? <PetList pets={pets} /> : null}
    </article>
  );
};

export default Employee;
