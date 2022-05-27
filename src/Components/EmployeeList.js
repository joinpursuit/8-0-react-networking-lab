import React from 'react'
import Employee from './Employee'
import './EmployeeList.css'

export const EmployeeList = ({ employees }) => {
  const employee = employees.map((employee) => (
    <div key={employee.id}>
      <Employee employees={employee}  />
    </div>
  ))

  return (
    <main>
      <h2>All Staff</h2>
      <section className='employee-list'>{employee}</section>
    </main>
  )
}

export default EmployeeList
