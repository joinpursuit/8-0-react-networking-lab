import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({eachEmployee, eachEmployeeId}) => {
  
  const [showDetails, setShowDetails] = useState(false)
  
  function toggleShowMore(){
    setShowDetails(!showDetails)
}
  
  return (
    <article className="employee">
      <h3> {eachEmployee.prefix + " " + eachEmployee.firstName + " " + eachEmployee.lastName}
      {eachEmployee.postfix && ", " + eachEmployee.postfix} </h3>
      <h4>{eachEmployee.title}</h4>
      <button onClick={() => toggleShowMore()}>{showDetails ? "Hide Pets" : "Show Pets"}</button>
      {showDetails && <PetList eachEmployee={eachEmployee} eachEmployeeId={eachEmployeeId}/>}
    </article>
  );
};

export default Employee;
