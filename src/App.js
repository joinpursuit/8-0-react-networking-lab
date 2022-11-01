import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useEffect } from "react";
import { useState } from "react";

function App () {

  const[employees, setEmployees] = useState([])
  const[pets, setPets] = useState([])
  // const url = "https://vet-api-1.onrender.com/api/employees"

  function getEmployees(){
    fetch("https://vet-api-1.onrender.com/api/employees")
        .then((response) => response.json())
        .then((data) => {
         setEmployees(data)
          console.log("this is the list of employees ",data)
        })
        
        .catch((err) => { console.log("error fetching data")
        })
      }
useEffect(()=>{
  getEmployees()
},[])

function getPets(){
  fetch("https://vet-api-1.onrender.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
       setPets(data)
        console.log("this is the list of all serviced pets ",data)
      })
      .catch((err) => { console.log("error fetching data")
      })
    }
useEffect(()=>{
  getPets()
  },[])


  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} pets={pets} />
    </>
  );
};

export default App;
