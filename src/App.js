import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  const [employees, setEmployees] = useState([])

useEffect(()=>{
  fetch(`https://vet-api-1.onrender.com/api/employees`)
  .then((res) => res.json())
  .then((res)=>{
    setEmployees(res)
  })
  .catch((err)=>{
    console.error();
  })
}, [])

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} />
    </>
  );
};

export default App;
