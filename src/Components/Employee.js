import React from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { firstName, lastName, title, prefix, postfix } = this.props.employee;
    return (
      <article className="employee">
        {console.log(this.props.employee)}
        <h3>{firstName} {lastName}</h3>
        <h4>{title}</h4>
        <button>Show Pets</button>
        <PetList />
      </article>
    );
  }
};

export default Employee;
