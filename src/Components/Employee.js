import React from "react";
import "./Employee.css";
import PetList from "./PetList.js";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    const { prefix, firstName, lastName, title, postfix, id } =
      this.props.employee;
    return (
      <article className="employee">
        <h3>
          {prefix} {firstName} {lastName}, {postfix}
        </h3>
        <h4>{title}</h4>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Show Pets
        </button>
        {this.state.show ? <PetList id={id} /> : null}
      </article>
    );
  }
}

export default Employee;
