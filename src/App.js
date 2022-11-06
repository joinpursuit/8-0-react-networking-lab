import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);

   useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/employees")
    .then((res) => res.json())
    .then((data) => {

      setEmployees(data);
    })
    .catch((err) => {
      console.log("error fetching employees.");
    });

   }, [])

console.log(employees)

  return (
    <>
      <NavBar />
      <EmployeeList 
      employees={employees}
     
      />
    </>
  );
}

export default App;