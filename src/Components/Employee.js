import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false,
    };
  }

  render() {
    const { prefix, firstName, lastName, title, postfix, id } = this.props.emp;
    return (
      <article className="employee">
        {postfix ? (
          <h1>
            {prefix} {firstName} {lastName}, {postfix}
          </h1>
        ) : (
          <h1>
            {prefix} {firstName} {lastName}
          </h1>
        )}
        <h3>{title}</h3>
        <button onClick={() => this.setState({ isClick: !this.state.isClick })}>
          Show Pets
        </button>
        <PetList /> 
      </article>
    );
  }
}

export default Employee;
