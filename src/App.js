import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {

const [employeeData, setEmployeeData] = useState([])
const [pets, setPets] = useState([])

function fetchEmployees(){
  fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees").then((response) => response.json()).then((response) => setEmployeeData(response))
}

function fetchPets(){
  fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets").then((response) => response.json()).then((response) => setPets(response))
}

// will only call function on mount, because of dependancy array
useEffect(() => {
  fetchEmployees();
}, [])

useEffect(() => {
  fetchPets();
}, [])


  return (
    <>
   
      <NavBar />
      <EmployeeList employeeData={employeeData} pets={pets}/>
    </>
  );
};

export default App;
