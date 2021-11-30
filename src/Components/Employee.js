import React from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <article className="employee">
        <h3>
          Staff Member Name: {this.props.eachPerson.prefix}{" "}
          {this.props.eachPerson.firstName} {this.props.eachPerson.lastName},{" "}
          {this.props.eachPerson.postfix}
        </h3>
        <h4>Staff Member Title</h4>
        <button onClick={() => this.setState({ clicked: !this.state.clicked })}>
          Show Pets
        </button>
        {this.state.clicked ? <PetList id={this.props.eachPerson.id} /> : null}
      </article>
    );
  }
}

export default Employee;
