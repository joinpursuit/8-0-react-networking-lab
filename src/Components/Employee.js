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
    const petsStatus = this.state.showPets;
    const { id, prefix, firstName, lastName, postfix, title } =
      this.props.employee;
    const petButton = petsStatus ? "Hide pets" : "Show pets";
    return (
      <article className='employee'>
        <h3>
          {prefix} {firstName} {lastName}
          {postfix && ", " + postfix}
        </h3>
        <h4>{title}</h4>

        <button
          onClick={() => {
            this.setState({ showPets: !petsStatus });
          }}
        >
          {petButton}
        </button>
        {petsStatus && <PetList id={id} />}
      </article>
    );
  }
}

export default Employee;
