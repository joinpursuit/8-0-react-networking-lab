import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  // Declare State for Employees
  const [employees, setEmployees] = useState([])
  // Declare state for pets
  const [pets, setPets] = useState([])

  // function for fetching employee/ pet info
  function callFetch(endpoint) {
    fetch(`https://vet-api-1.onrender.com/${endpoint}`)
    .then(resp => resp.json())
    .then(respJson => {
      if(endpoint === `api/employees`){
        setEmployees(respJson)
      }
      else if(endpoint === `api/pets`){
        setPets(respJson)
      }
       
    })
    .catch(err => console.log(`Error`))
  }

  // use effect to fetch data on page load
  useEffect(() => {callFetch(`api/employees`)}, [])
  useEffect(() => {callFetch(`api/pets`)}, [])

  return (
    <>
      <NavBar />
      <EmployeeList
      employees = {employees}
      pets = {pets} 
      />
    </>
  );
};

export default App;

