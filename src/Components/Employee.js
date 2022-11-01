import PetList from "./PetList";
import { useState, useEffect } from "react";
import "./Employee.css";

export const Employee = ({ employee, fetchData }) => {
  // ******* STATES *******

  const [pets, setPets] = useState(false);

  const showPets = () => {
    setPets(!pets);
  };

  // const PET_ENDPOINT = `/api/pets?employeeId=${employee.id}`;

  // //********* STATES *********/
  // const [petData, setPetData] = useState([]);

  // useEffect(() => {
  //   fetchData(PET_ENDPOINT, setPetData);
  //   console.log(petData);
  // }, []);

  //********* RETURN ********s*/
  return (
    <article className="employee">
      <h3>
        {employee.prefix ? employee.prefix : null} {employee.firstName}{" "}
        {employee.lastName}
        {employee.postfix ? `, ${employee.postfix}` : null}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={showPets}>{!pets ? "Show Pets" : "Hide Pets"}</button>
      {pets ? <PetList fetchData={fetchData} employee={employee} /> : null}
    </article>
  );
};

export default Employee;
