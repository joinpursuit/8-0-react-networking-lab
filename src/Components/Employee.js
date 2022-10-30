import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);
  const [ownPets, setOwnPets] = useState([]);

  useEffect(() => {
    console.log(employee.id);
    console.log("fetching pets");
    fetch(
      "https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId=" +
        employee.id
    )
      .then((res) => res.json())
      .then((pets) => setOwnPets(pets));
  }, [employee.id]);

  return (
    <article className="employee">
      <h3>
        {employee.prefix + " " + employee.firstName + " " + employee.lastName}
        {employee.postfix && ", " + employee.postfix}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>
        {showPets ? "Hide " : "Show "} Pets
      </button>
      {showPets && <PetList ownPets={ownPets} />}
    </article>
  );
};

export default Employee;
