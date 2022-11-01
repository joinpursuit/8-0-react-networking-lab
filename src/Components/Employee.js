import { useEffect, useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({
  firstName,
  lastName,
  postfix,
  prefix,
  title,
  id,
}) => {
  const [showPets, setShowPets] = useState(false);
  const [pets, setPets] = useState("");

  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/pets?employeeId=" + id)
      .then((res) => res.json())
      .then((res) => setPets(() => res.map(({ name }) => name).join(", ")))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <article className="employee">
      <h3>
        {prefix && prefix + " "}
        {firstName + " " + lastName}
        {postfix && ", " + postfix}
      </h3>
      <h4>{title}</h4>
      <button onClick={() => setShowPets(!showPets)}>
        {showPets ? "Hide " : "Show "}Pets
      </button>
      <PetList pets={pets} showPets={showPets} />
    </article>
  );
};

export default Employee;
