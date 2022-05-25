import react from "react";
import PetList from "./PetList";
import "./Employee.css";

// add prop from parent Componenet EmployeeList 
export const Employee = ({json}) => {
  console.log(json)
   {
    return (
      <article className="employee">
        <h3></h3>
        <h4>Staff Member Title</h4>
        <button>Show Pets</button>
        <PetList />
      </article>
    );
  }
};

export default Employee;