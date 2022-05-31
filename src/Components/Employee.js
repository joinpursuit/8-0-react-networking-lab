import React from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { id, firstName, lastName, title, prefix, postfix } = this.props.employee;
    return (
      <article className="employee" key={id}>
        <h3>{(prefix) ? prefix : ''} {firstName} {(postfix) ? `${lastName}, ${ postfix}` : `${lastName}`}</h3>
        <h4>{title}</h4>
        <button>Show Pets</button>
        <PetList employeeId={id}/>
      </article>
    );
  }
};

export default Employee;
