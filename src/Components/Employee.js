import PetList from "./PetList";
import { useState, useEffect } from "react";
import "./Employee.css";

export const Employee = () => {

  const [employeeInfo, setEmployeeInfo] = useState({})

  function getEmployees () {
    fetch("https://vet-api-1.onrender.com/api/employees")
    .then((response) => response.json())
    .then((json) => {
      setEmployeeInfo(json);
    })
    .catch((err) => {
      console.log("error fetching image");
    });
  }

  useEffect(() => {
    getEmployees()
  }, [])

  console.log(employeeInfo)


  return (
    employeeInfo.map((data) => {
      return (

        <article className="employee">
        <h3>{data.prefix}{data.firstName} {data.lastName} {data.postfix}</h3>
        <h4>{data.title}</h4>
        <button>Show Pets</button>
        <PetList />
    </article>

      )
    })
    
  );
};

export default Employee;
