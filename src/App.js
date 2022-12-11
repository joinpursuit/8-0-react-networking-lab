import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";


const EMPLOYEE_API = "/employee.json";
const PETS_API = "/pets.json";
//Can't fetch API so broke up and saved data, and fetched from storage

function App () {

  const [pets, setPets] = useState([]);
  const [employees, setEmployees] = useState([]);

  function getEmployees() {
    fetch(EMPLOYEE_API)
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })

      .catch((err) => {
        console.log("error fetching data");
      });
  }
  useEffect(() => {
    getEmployees();
  }, []);

  function getPets() {
    fetch(PETS_API)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((err) => {
        console.log("error fetching data");
      });
  }
  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} pets={pets} />
    </>
  );
};

export default App;
