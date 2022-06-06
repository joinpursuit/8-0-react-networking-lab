import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = ({workers}) => {
 /* constructor(props) {
  super(props)
  }
  render() {*/
  return (
    <main>
      
      <h2>All Staff</h2>
      <section className="employee-list">
      {workers.map((id, firstName, lastName, prefix, postfix, title) => {
        return ( 
          <ul>
            <li key={id}>
          <Employee 
          id = {id}
          firstName = {firstName}
          lastName = {lastName}
          prefix = {prefix}
          postfix = {postfix}
          title = {title}
          />
          </li>
          </ul>
        )
      })}
      </section>
    </main>
  );
}
export default EmployeeList;
