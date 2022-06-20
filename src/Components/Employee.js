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
  handlePetButton = () => {
    this.setState({ showPets: !this.state.showPets });
  };

  render() {
    const { prefix, firstName, lastName, title, postfix, id } =
      this.props.employee;
    return (
      <article className="employee">
        <h3>
          {prefix && prefix} {firstName} {lastName}
          {postfix && ", " + postfix}
        </h3>
        <h4>{title}</h4>
        <button onClick={this.handlePetButton}>
          {!this.state.showPets ? "Show Pets" : "Hide Pets"}
        </button>
        {this.state.showPets && <PetList id={id} />}
      </article>
    );
  }
}

export default Employee;
