import React, {useState, useEffect} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {


  const [employeeInfo, setEmployeeInfo] = useState([])

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



  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeInfo && employeeInfo.map((employee) => (
          <Employee key={employee.id} employee={employee}/>
        ))}
        
      </section>
    </main>
  );
};

export default EmployeeList;
