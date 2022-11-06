import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

const URL = "https://vet-resource-api-9-2.herokuapp.com/api/pets";

export const Employee = ({ employee }) => {
  const [petArr, setPetArr] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  function getPets() {
    fetch(`${URL}?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then(setPetArr);
  }

  useEffect(() => {
    if (petArr) {
      setButtonClicked(true);
    }
  }, [petArr]);

  return (
    <article className="employee">
      <h3>
        {employee.prefix ? employee.prefix : ""} {employee.firstName}{" "}
        {employee.lastName}{employee.postfix ? `, ${employee.postfix}` : ""}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={getPets}>Show Pets</button>
      {buttonClicked ? <PetList petArr={petArr} /> : null}
    </article>
  );
};

export default Employee;
