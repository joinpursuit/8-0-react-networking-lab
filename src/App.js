import React, {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";



const App = () => {
  const [employee, setEmployees] = useState([])
  const [pets, setPets] = useState([])
  const getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
    .then(data => data.json())
    .then(json => {setEmployees(json)})
  }
  // const getPets = () => {
  //   fetch("https://vet-lab-8-4.herokuapp.com/api/pets")
  //   .then(data => data.json())
  //   .then(json => {setPets(json)})
  // }

useEffect(() => {
  getEmployees()
  // getPets()
})



  return (
    <>
      <NavBar />
      <EmployeeList employee ={employee}  pets={pets}/>
    </>
  );
};

export default App;