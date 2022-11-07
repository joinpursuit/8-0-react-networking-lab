import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";
import { getPets } from "../api/veterinaryApi";

export const Employee = ({ data }) => {
  const [pets, setPets] = useState([])
  const [showPets, setShowPets] = useState(false)
  const { firstName, lastName, title, prefix, postfix } = data

  const generateName = () => {
    const fullName = `${firstName} ${lastName}`

    if (prefix) return `${prefix} ${fullName}`
    if (postfix) return `${fullName}, ${postfix}`

    return fullName
  }

  const handleClick = () => {
    getPets(data.id)
      .then(petsList => setPets(petsList))

    setShowPets(true)
  }

  return (
    <article className="employee">
      <h3>{generateName()}</h3>
      <h4>{title}</h4>
      <button onClick={()=> handleClick()}>Show Pets</button>

      { showPets ? <PetList pets={pets} /> : null }
    </article>
  );
};

export default Employee;
