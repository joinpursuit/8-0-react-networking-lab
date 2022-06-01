import PetList from "./PetList";
import "./Employee.css";
import React, { useEffect, useState } from "react";

const Employee = (props) => {
  const [firstName, setfirstName] = useState(props.firstName);
  const [lastName, setlastName] = useState(props.lastName);
  const [title, settitle] = useState(props.title);
  const [prefix, setprefix] = useState(props.prefix);
  const [postfix, setpostfix] = useState(props.postfix);
  const [id, setid] = useState(props.id);
  const [petList, setpetList] = useState([]);
  const [isActive, setisActive] = useState(false);

  //It occurs to me now I probably didn't need to set all these up for useState, but whatever.
  
  const listPet = (id) => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then((pets) => pets.json())
      .then((pets) => {
        setpetList(pets)
        setisActive(true)
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    console.log("UPDATING")
  }, [props])
  
  return (
    <article className="employee">
      <h3>
        {prefix} {firstName} {lastName}
        {postfix ? `, ${postfix}` : null}
      </h3>
      <h4>{title}</h4>
      <button onClick={(e) => listPet(id)}>Show Pets</button>
      {isActive ? <PetList pets={petList} /> : null}
    </article>
  );
};

export default Employee
