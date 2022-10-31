import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ worker, index }) => {
  // const [employees, setEmployees] = useState([]);
  const [showPets, setShowPets] = useState(false);
  // function getEmployees() {
  //   fetch("https://vet-api-1.onrender.com/api/employees")
  //     .then((data) => data.json())
  //     .then((data) => setEmployees(data))
  //     .catch((err) => {
  //       console.log("ERR");
  //     });
  // }

  function togglePets() {
    setShowPets(!showPets);
  }

  // useEffect(() => {
  //   getEmployees();
  // }, []);

  // console.log(employees);

  return (
    <article className="employee" key={index}>
      <h3>
        {worker.prefix} {worker.firstName} {worker.lastName}
        {!worker.postfix ? null : ", " + worker.postfix}
      </h3>
      <h4>{worker.title}</h4>
      <button onClick={togglePets}>
        {showPets ? "Hide Pets" : "Show Pets"}
      </button>
      {showPets ? <PetList worker={worker} showPets={showPets} /> : null}
    </article>
  );
};

export default Employee;
