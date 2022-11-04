import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState,useEffect } from "react";
export const EmployeeList = () => {


  const [data,setData]=useState(null)

    
  useEffect(()=>{
fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees")
 .then(res => res.json()).then((data) =>    {
 
//  console.log(data)

setData(data)} )  
  
},[])
// console.log(data)
  return (
    <main>
      {data && data.map((dat) =>{
        console.log(dat.firstName)
        return(
          <div  key={dat.firstName}>

         
      <section className="employee-list">
        <div>{dat.name}</div>
        {data && <Employee data={data} occupation={dat.title} postfix={dat.postfix} title={dat.prefix} last={dat.lastName} name={dat.firstName} id={dat.id} />}
      </section>

     </div>
)})}
    </main>
  );
};

export default EmployeeList;
