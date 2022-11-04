import { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {
  
  const prefix = employee.prefix
  const first = employee.firstName
  const last = employee.lastName
  const postfix = employee.postfix
  const title = employee.title

  return (
    <article className="employee">
      {
        postfix.length > 1 
        ?
        <h3>{prefix} {first} {last}, {postfix}</h3>
        :
        <h3>{prefix} {first} {last}</h3>
      }
      <h4>{title}</h4>
      <PetList employeeID={employee.id} />
    </article>
  );
};

export default Employee;
