import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
function App () {
    //Make something that grab the employees
    const [employees, setEmployees] = useState([])
    
  useEffect(()=>{
    fetch('https://vet-api-1.onrender.com/api/employees')
    //Refactor to end point for petlist 
    .then((res) => res.json())
    .then((res) => setEmployees(res)) 
  }, [])
  return (
    <>
      <NavBar />
      <EmployeeList
       employees={employees} />
    </>
  );
};

export default App;
