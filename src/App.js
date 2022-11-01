import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  const [employees, setEmployees] = useState("")
  const [pets, setPets] = useState("")

  function allEmployees() {
    fetch("https://vet-api-1.onrender.com/api/employees")
    .then((response) => response.json())
    .then((json) => {
     setEmployees(json)
    })
    .catch((err) => {
      console.log("Error fetching data.");
    });
  }
  
  useEffect(() => {
    allEmployees()
  }, [])
  
  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} key={employees.id} />
    </>
  );
}

export default App;
