import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  // Declare State for Employees
  const [employees, setEmployees] = useState([])

  // function for fetching employee/ pet info
  function callFetch() {
    fetch('https://vet-api-1.onrender.com/api/employees')
    .then(resp => resp.json())
    .then(respJson => setEmployees(respJson) )
    .catch(err => console.log(`Error`))
  }

  // use effect to fetch data on page load
  useEffect(() => {callFetch()}, [])
  return (
    <>
      <NavBar />
      <EmployeeList
      employees = {employees} />
    </>
  );
};

export default App;
