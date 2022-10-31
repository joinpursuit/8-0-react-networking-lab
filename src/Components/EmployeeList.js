import React from "react"
import Employee from "./Employee"
import "./EmployeeList.css"

export const EmployeeList = ({ employees, pets }) => {
  return (
    <main>
      <h2>All Staff</h2>
      {employees.map((employee) => {
        return (
          <section className="employee-list">
            <Employee key={employee.id} employee={employee} pets={pets} />
          </section>
        )
      })}
    </main>
  )
}

export default EmployeeList
