import PetList from "./PetList"
import "./Employee.css"
import { useState } from "react"

export const Employee = ({ employee, pets }) => {
  const [showpets, setShowPet] = useState(false)

  function handlePetClick(e) {
    setShowPet(!showpets)
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix} {employee.firstName} {employee.lastName}
        {employee.postfix && ", " + employee.postfix}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={handlePetClick}>Show Pets</button>
      {showpets && <PetList employee={employee} />}
    </article>
  )
}

export default Employee
