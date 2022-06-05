import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

const Employee = ({id, firstName, lastName, prefix, postfix, title}) => {

  const [pets, setPets] = useState([])
  const [showPets, setShowPets] = useState(false)

  const getPets = () => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then(data => data.json())
      .then(json => {
        setPets(json)
      })
  }

  useEffect(() => {
    getPets()
  }, [])


    return (
      <article className="employee">
        <h3> {prefix} {firstName} {lastName}, {postfix} </h3>

        <h4>{title}</h4>
        <button onClick={()=> {setShowPets(!showPets)}}>{ showPets ? "Hide Pets" : "Show Pets"}</button>
        { showPets ? <PetList pets={pets}/> : null }
       
      </article>
    );
  };

export default Employee