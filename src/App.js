import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App (id, employees, pets) {

console.log(id)

  return (
    <>
      <NavBar />
      <EmployeeList  />
    </>
  );
};

export default App;
