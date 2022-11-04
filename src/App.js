import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {

  const [employees, setEmployees] = useState([])

  const BASE_URL = "https://vet-api-1.onrender.com"
  const pets = "/api/pets"
  const owners =  "/api/owners"
  const owners_pets = "/api/owners_pets"
  const employee = "/api/employees"

  function getEmployees() {
    fetch(BASE_URL + employee)
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

useEffect(() => {
  getEmployees()
}, [])

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} />
    </>
  ); 
};

export default App;
