import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { callFetch } from "./helperFunctions";

function App () {
  // Declare State for Employees
  const [employees, setEmployees] = useState([])
   
  // use effect to fetch employee data on page load
  useEffect(() => {callFetch(`api/employees`, setEmployees)}, [])

  return (
    <>
      <NavBar />
      <EmployeeList
      employees = {employees}
      />
    </>
  );
};

export default App;


