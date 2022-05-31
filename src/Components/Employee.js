import React from "react";
import PetList from "./PetList";
import "./Employee.css";

export default class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      showPets: false,
    };
  }
  showHidePet = () => {
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
        <button onClick={this.showHidePet}>
          {!this.state.showPets ? "Show Pets" : "Hide Pets"}
        </button>
        {this.state.showPets && <PetList eid={id} />}
      </article>
    );
  }
}
