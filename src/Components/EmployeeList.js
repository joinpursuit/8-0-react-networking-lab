import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [list, setlist] = useState([]);

  function fetchRequest() {
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((employData) => setlist(employData));
  }

  // console.log(list);
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {list.map(({ firstName, id, lastName, postfix, prefix, title }) => {
          return (
          <Employee  firstName={firstName} id={id} lastName={lastName} postfix={postfix} prefix={prefix} title={title}/>
          )
          
        })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
