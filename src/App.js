import React, { useEffect, useState } from 'react'
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

const App = () => {
 
  /*this.state = {
    workers: []*/
    const [workers, setWorkers] = useState([]);
  

const getEmployees=(setWorkers)=>{
  fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
  .then(data => data.json())// returns a promise and we pass data
  .then(json => {
    setWorkers(json)
  })
}

//this fires the first time the component renders
useEffect(() => {
  getEmployees(setWorkers)
  return () => {
    console.log("This component unmounted duh!")
  }
}, [workers])

  return (
    <>
    <NavBar />
    <EmployeeList 
    workers = {workers}
   />
    </>
  )

}
export default App;
