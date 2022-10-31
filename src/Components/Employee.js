import PetList from "./PetList"
import "./Employee.css"

export const Employee = ({ pets, employee, key }) => {
  return (
    <article className="employee">
      <h3>Staff Member Name</h3>
      {employee.prefix === true
        ? employee.prefix + " " + employee.firstName + employee.lastName
        : employee.firstName + employee.lastName}
      <h4>Staff Member Title</h4>
      {employee.title}
      <br />
      <button>Show Pets</button>
      <PetList />
    </article>
  )
}

export default Employee
