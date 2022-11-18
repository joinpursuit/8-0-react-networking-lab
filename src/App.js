
import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  // State variable
  const [employees, setEmployees] = useState([])

  
  const BASE_URL = "https://vet-api-1.onrender.com"
  const employee = "/api/employees"

  // Function to make a fetch call
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

  // useEffect on page load
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