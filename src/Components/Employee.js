import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      showPets: false,
    };
  }
  toggle = () => {
    this.setState({ showPets: !this.state.showPets });
  };
  render() {
    const { id, firstName, lastName, prefix, postfix, title } =
      this.props.employee;
    const name =
      [prefix, firstName, lastName].join(" ") + (postfix ? ", " + postfix : "");
    return (
      <article className="employee">
        <h2>{name}</h2>
        <h4>{title}</h4>
        <button onClick={this.toggle}>
          {this.state.showPets ? "Hide Pets" : "Show Pets"}
        </button>
        <PetList id={id} showPets={this.state.showPets} />
      </article>
    );
  }
}

export default Employee;
