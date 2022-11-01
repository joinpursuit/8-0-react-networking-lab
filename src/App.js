import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const EMPLOYEE_ENDPOINT = "/api/employees";

  //********* STATES ******/
  const [employees, setEmployees] = useState([]);

  const fetchData = (endpoint, setState) => {
    fetch(`https://vet-api-1.onrender.com${endpoint}`)
      .then((res) => res.json())
      .then((json) => {
        setState(json);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData(EMPLOYEE_ENDPOINT, setEmployees);
  }, []);

  //********** RETURN **********/
  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} fetchData={fetchData} />
    </>
  );
}

export default App;
