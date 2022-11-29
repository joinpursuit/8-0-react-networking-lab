import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";
import data from "../data.json";

export const Employee = ({ e }) => {
  // const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/joinpursuit/resource-veterinarian-api/main/data"
  //   )
  //     .then((res) => res.json)
  //     .then((json) => setData(json));
  //   console.log(data);
  // }, []);

  const pet = data.pets.filter((p) => p.employeeId === e.id);

  console.log(pet);
  return (
    <div>
      {" "}
      <article className="employee">
        {" "}
        <h3>
          {e.prefix}
          {e.firstName} {e.lastName} {e.postfix}
        </h3>
        <h4>{e.title}</h4>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Pets" : "Show Pets"}
        </button>
        {show && <PetList pet={pet} />}
      </article>
    </div>
  );
};

export default Employee;
