import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = () => {
  const [show, setShow]=useState(false)
  const [employee, setEmployee] = useState([]);
  // fecth API
  function EmployeeList() {
    fetch("https://vet-api-1.onrender.com/api/employees")
      .then((response) => response.json())
      .then((list) => {
        setEmployee(list);
        console.log(list);
      })
      .catch((error) => {
        console.log("Fetching Employees");
      });
  }
  useEffect(() => {
    console.log("Effect Here");
    EmployeeList();
  }, [employee.id]);

  return (
    <> 
    {employee.map((employee) => {
      return (
        <article className="employee">
        <h3>{employee.prefix +" "+ employee.firstName +" "+ employee.lastName+", "+employee.postfix}</h3>
        <h4>{employee.title}</h4>
        <button onClick={()=>{
          setShow(!show)
        }}>{show ? "Show Pets" : "Hide Pets"}</button>
<PetList employeeID={employee.id}/>

        </article>
        );
      })}
      </>
  );
};

export default Employee;
