import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({individualEmployee, individualEmployeeId}) => {

   const [showDetails, setShowDetails] = useState(false)
   
    function toogleShowMore(){
        setShowDetails(!showDetails)
    }

    // className="showMore" onClick={()=>{toogleShowMore()}}

  return (
    <article className="employee">
      <h3> {individualEmployee.prefix + " " + individualEmployee.firstName + " " + individualEmployee.lastName}
      {individualEmployee.postfix && ", " + individualEmployee.postfix} </h3>
      <h4>{individualEmployee.title}</h4>
      <button onClick={()=> toogleShowMore()}>{showDetails ? "Hide Pets" : "Show pets"}</button>
      
      {showDetails && <PetList individualEmployee={individualEmployee} individualEmployeeId={individualEmployeeId}/>}
    </article>
  );
};

export default Employee;
