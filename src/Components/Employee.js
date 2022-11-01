import PetList from "./PetList"
import "./Employee.css"
import { useState } from "react"
export const Employee = ({ pets, employee }) => {
  const [showpets, setpetsShows] = useState(false)

  function showPetList() {
    setpetsShows(!showpets)
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix + " " + employee.firstName + " " + employee.lastName}
        {employee.postfix && ", " + employee.postfix}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={() => showPetList()}>
        {!showpets ? "show Pets" : "hide Pets"}
      </button>
      {showpets && <PetList employee={employee} />}
    </article>
  )
}

export default Employee
