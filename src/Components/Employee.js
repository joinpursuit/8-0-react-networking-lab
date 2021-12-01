import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

export class Employee extends Component {
  constructor() {
    super();

    this.state = {
      showBool: false,
      names: "",
    };
  }

  handleClick = () => {
    this.setState({ showBool: !this.state.showBool });
  };

  render() {
    return (
      <article className="employee">
        <h3>{this.props.name}</h3>
        <h4>{this.props.title}</h4>
        <button onClick={this.handleClick}>Show Pets</button>
        <PetList show={this.state.showBool} id={this.props.id} />
      </article>
    );
  }
}

export default Employee;
