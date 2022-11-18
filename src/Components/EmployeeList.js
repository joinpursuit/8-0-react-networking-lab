import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


export const EmployeeList = () => {
const [vetEmpl,setVetEmpl]=useState([])
  useEffect(()=>{
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees")
    .then((response)=>response.json())
    .then((response)=>setVetEmpl(response))
  },[])
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
       { vetEmpl.map((employee)=>{
        return <Employee employee={employee} />
       })

}
      </section>
    </main>
  );
};

export default EmployeeList;