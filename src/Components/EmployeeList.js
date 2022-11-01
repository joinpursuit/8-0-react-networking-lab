import React from "react"
import Employee from "./Employee"
import "./EmployeeList.css"

export const EmployeeList = ({ employees }) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees &&
          employees.map((employee) => {
            return <Employee employee={employee} />
          })}
      </section>
    </main>
  )
}

export default EmployeeList
