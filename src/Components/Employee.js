import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  render() {
    let comma = "";
    if (this.props.eachPerson.postfix) {
      comma = ",";
    }

    return (
      <article className="employee">
        <h3>
          {this.props.eachPerson.prefix} {this.props.eachPerson.firstName} {this.props.eachPerson.lastName}
          {comma} {this.props.eachPerson.postfix}
        </h3>
        <h4>{this.props.title}</h4>
        <button onClick={() => this.setState({ clicked: !this.state.clicked })}>Show Pets</button>
        {this.state.clicked ? <PetList id={this.props.eachPerson.id} /> : null}
      </article>
    );
  }
}

export default Employee;
