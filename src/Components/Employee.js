import PetList from "./PetList"
import "./Employee.css"
import { useState } from "react"
export const Employee = ({ pets, employee, key }) => {
  const [showpets, setpetsShows] = useState(false)

  function showPet() {
    setpetsShows(!showpets)
  }

  return (
    <article className="employee">
      <h3>Staff Member Name</h3>
      {employee.prefix + " " + employee.firstName + " " + employee.lastName}
      {employee.postfix && employee.firstName + employee.lastName}
      <h4>Staff Member Title</h4>
      {employee.title}
      <br />
      <br />
      <button onClick={() => showPet()}>Show Pets</button>
      <PetList employee={employee} />
    </article>
  )
}

export default Employee
