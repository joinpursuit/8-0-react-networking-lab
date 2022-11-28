import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ employee, pets }) => {
  const [clicked, setClicked] = useState(false);
  const [employeesPets, setEmployeesPets] = useState([]);

  function handleOnClick() {
    setClicked(!clicked);
    makePetsFetchRequest();
  }

  function makePetsFetchRequest() {
    fetch(
      `https://vet-resource-api-9-2.herokuapp.com/api/pets?employeeId=${employee.id}`
    )
      .then((response) => response.json())
      .then((pets) => {
        setEmployeesPets([...pets]);
      });
  }

  return (
    <article className="employee">
      <h3>{`${employee.prefix} ${employee.firstName} ${employee.lastName}${
        employee.postfix ? ", " + employee.postfix : ""
      }`}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleOnClick}>Show Pets</button>
      {clicked ? <PetList employeesPets={employeesPets} /> : null}
    </article>
  );
};

export default Employee;
