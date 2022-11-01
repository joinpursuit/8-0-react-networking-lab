import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState , useEffect } from "react";

function App () {

const BASE_URL = "https://vet-api-1.onrender.com/"

const pets_URL = "api/pets"
const emp_URL = "api/employees"

const [empData, setEMPData] = useState([])
const [petData, setPetData] = useState([])

function makeEMPFetchRequest() {
  fetch(`${BASE_URL + emp_URL}`)
    .then((response) => response.json())
    .then((response) => setEMPData(response)
    );
}

function makePetFetchRequest() {
  fetch(`${BASE_URL + pets_URL}`)
    .then((response) => response.json())
    .then((response) => setPetData(response)
    );
}

useEffect(()=>{
  makePetFetchRequest()
},[])


useEffect(()=>{
  makeEMPFetchRequest()
},[])

  return (
    <>
      <NavBar />
      <EmployeeList 
      empData={empData}
      petData={petData}
      />
    </>
  );
};

export default App;
