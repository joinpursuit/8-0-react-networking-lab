import React from 'react';
// import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import EmployeeList from './Components/EmployeeList';

function App() {
  // const [employees, setEmployees] = useState({});
  // const [pets, setPets] = useState({});

  // function fetchEmployees() {
  //   fetch('https://vet-api-1.onrender.com/api/employees')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEmployees(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function fetchPet() {
  //   fetch('https://vet-api-1.onrender.com/api/pets')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPets(data);
  //       console.log(setPets(data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // useEffect(() => {
  //   fetchEmployees();
  //   // console.log(setEmployees(fetchEmployees.id));
  // }, []);

  // useEffect(() => {
  //   fetchPet();
  // }, []);

  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
}

export default App;
