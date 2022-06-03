import React, { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export default function Employee({employeeId, prefix, firstName, lastName, postfix, title}) {
 
  const [petList, setPetList] = useState([])
  const [showPets, setShowPets] = useState(false)

  const getPets = () => {
    fetch(
      `http://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${employeeId}`
    )
      .then((data) => data.json())
      .then((pets) => {
        setPetList(pets)
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    getPets()
  })

  const handleClick = () => {
    if (showPets === false) {
      setShowPets(true)
        } else {
          setShowPets(false)
    }
  };

  const show = () => {
    if(showPets === true){
      return (
        <PetList petList={petList}/>
      )
    }
  }


    return (
      <article className="employee">
        <h3>
          {prefix} {firstName} {lastName} {postfix}
        </h3>
        <h4>{title}</h4>
        <button onClick={handleClick}>Show Pets</button>
        <section>{show()}</section>
      </article>
    );
  }
