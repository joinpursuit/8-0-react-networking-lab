import {useState, useEffect} from "react";

import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {

  let [data, setData] = useState([]);

  function employeeFetchRequest(){
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees")
    .then((response) => response.json())
    .then(result => setData(result));
  }

  useEffect(() => {
   employeeFetchRequest();
  }, []);


  return (
    <>
      <NavBar />
      <EmployeeList data={data}/>
    </>
  );
};

export default App;
