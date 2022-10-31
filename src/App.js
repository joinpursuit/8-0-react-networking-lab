import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";


function App () {

  // map through the employees list 
// return a employee componet for each employee for the employee list
// hand down the approate date to each componet 
// compare the employees id to the pets employee id 


  const [employees, setEmployees]=useState("")


  function allEmployees(){
    fetch("https://vet-api-1.onrender.com/api/employees")
    .then((response) => response.json())
    .then((json) => {
     setEmployees(json)
    })
    .catch((err) => {
      console.log("error fetch");
    });
  }

  useEffect(()=>{
    allEmployees()
  }, [])










  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} key={employees.id} />
    </>
  );
};

export default App;
