import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((response) => response.json())
      .then((response) => setEmployees(response))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/pets")
      .then((response) => response.json())
      .then((response) => setPets(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} pets={pets} />
    </>
  );
}

export default App;
