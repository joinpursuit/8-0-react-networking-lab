import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


const api_address = "https://vet-resource-api-9-2.herokuapp.com/";
export const EmployeeList = () => {
  
  const [employees,updateEmployees] = useState([]);
  
  useEffect(()=>{
    fetch(`${api_address}api/employees`)
    .then((response) => response.json())
    .then((data) => {
      updateEmployees(data);
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  },[])
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(el=> <Employee key={el.id} employee={el}/> )}
        
      </section>
    </main>
  );
};

export default EmployeeList;
