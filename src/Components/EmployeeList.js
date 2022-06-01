import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
    .then(data => data.json())
    .then(json => {
      setEmployees(json);
    })
    .catch((error) => {
      alert(error)
    })
  }

  useEffect(()=>{
    getEmployees()
  }, []
  )

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employees.map((employee) => <Employee employee={employee}/>)}
        </section>
      </main>
    );

};

export default EmployeeList;
