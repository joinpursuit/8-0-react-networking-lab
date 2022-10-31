import PetList from "./PetList";
import { useState, useEffect } from "react";
import "./Employee.css";

export const Employee = () => {
  const [employee, setEmployee] = useState([])
 
  useEffect(() => {
    fetch("https://vet-api-1.onrender.com/api/employees")
    .then((response) => response.json())
    .then((json) => {
      setEmployee(json);
    })
    .catch((err) => {
      console.log("error");
    });
  }, [])


  return (
   <section>
     {employee.map((map) => {
       return (
        <article className="employee">
        <h3>{map.prefix} {map.firstName} {map.lastName} {map.postfix}</h3>
        <h4>{map.title}</h4>
        <PetList map={map}/>
      </article>
       )
     })}
   </section>
    
  );
};

export default Employee;
