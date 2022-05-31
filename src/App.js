import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

const App = () => {
  return (
    <>
      <NavBar />
      {/* Renders all staff */}
      <EmployeeList />
    </>
  );
};

export default App;
