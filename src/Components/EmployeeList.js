import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor(props) {
  super(props)
  }
  render() {
  return (
    <main>
      
      <h2>All Staff</h2>
      <section className="employee-list">
      {this.props.workers.map((worker) => {
        return ( 
          <ul>
            <li key={worker.id}>
          <Employee 
          worker = {worker}/>
          </li>
          </ul>
        )
      })}
      </section>
    </main>
  );
};
}
export default EmployeeList;
