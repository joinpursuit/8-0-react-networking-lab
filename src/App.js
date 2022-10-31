import React from "react"
import NavBar from "./Components/NavBar"
import EmployeeList from "./Components/EmployeeList"
import { useState, useEffect } from "react"

function App() {
  const [pets, setPets] = useState([])
  function petsFetch() {
    fetch("https://vet-api-1.onrender.com/api/pets")
      .then((response) => response.json())
      .then((json) => {
        setPets(json)
      })
      .catch((err) => {
        console.log("error fetching image")
      })
  }

  const [employees, setEmployees] = useState([])
  function employeeVetFetch() {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((response) => response.json())
      .then((json) => {
        setEmployees(json)
      })
      .catch((err) => {
        console.log("error fetching image")
      })
  }

  useEffect(() => {
    petsFetch()
  }, [])

  useEffect(() => {
    employeeVetFetch()
  }, [])

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} pets={pets} />
    </>
  )
}

export default App
