import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { render } from "@testing-library/react";

const App = () => {
  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};

export default App;
