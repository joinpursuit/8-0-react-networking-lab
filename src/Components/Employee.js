import { Component } from "react";
import "./Employee.css";
import PetList from "./PetList.js";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      showPets: false,
    };
  }

  render() {
    const petButton = this.state.showPets ? "Hide pets" : "Show pets";
    const { id, prefix, firstName, lastName, title, postfix } =
      this.props.employee;
    return (
      <article className='employee'>
        <h3>
          {prefix} {firstName} {lastName}
          {postfix && ", " + postfix}
        </h3>
        <h4>{title}</h4>
        <button
          onClick={() => {
            this.setState({ showPets: !this.state.showPets });
          }}
        >
          {petButton}
        </button>
        {this.state.showPets && <PetList id={id} />}
      </article>
    );
  }
}

export default Employee;
