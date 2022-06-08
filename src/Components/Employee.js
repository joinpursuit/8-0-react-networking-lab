import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

const Employee = ({ id, firstName, lastName, prefix, postfix, title }) => {
  const [pets, setPets] = useState([])



  const getPets = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/pets")
      .then(data => data.json())
      .then(json => {
        // console.log(json)
        setPets(json)
        // console.log(pets)
      })
  }

  useEffect(() => {
    getPets()
  })
  const hasPets = (e) => {
    const { value } = e.target
    // console.log(value)
    pets.filter((pet) => pet.employeeId === value).map((pet) => {
      return (
        <div>
          <h1>{pet.name}</h1>
        </div>
      )
    })
  }

  return (
    <article className="employee">
      <h3> {prefix} {firstName} {lastName} {postfix} </h3>

      <h4>{title}</h4>
      <button
        value={id}
        onClick={hasPets}>Show Pets</button>

      {pets.map(({ id, name, kind, breed, employeeID }) => {
        return (
          <PetList key={id}
            name={name}
            empID={employeeID}
            id={id}
          />

        )
      })}

    </article>
  );
};
export default Employee


