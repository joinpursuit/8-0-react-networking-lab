import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

const App = () => {
  const [employees, setEmployees] = useState();
  fetch("https://vet-api-8-1.herokuapp.com/api/employees")
    .then((response) => response.json())
    .then((data) => setEmployees(data));
  console.log(employees);

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} />
    </>
  );
};

export default App;
