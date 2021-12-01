import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

export class Employee extends Component {
  constructor() {
    super();

    this.state = {
      showBool: false,
    };
  }

  render() {
    return (
      <article className="employee">
        <h3>{this.props.name}</h3>
        <h4>{this.props.title}</h4>
        <button
          onClick={() => {
            this.setState({ showBool: !this.state.showBool });
          }}
        >
          Show Pets
        </button>
        <PetList name={this.props.pet} show={this.state.showBool} />
      </article>
    );
  }
}

export default Employee;
