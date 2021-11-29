import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      hidden: false
    }
  }

  render() {
    const { firstName, lastName, id, prefix, postfix, title } = this.props.person
    return (
      <article className="employee">
        <h3> {prefix && prefix} {firstName} {lastName}{postfix && `, ${postfix}`}</h3>
        <h4>{title}</h4>
        <button onClick={(event) => this.setState({ hidden: true })}>Show Pets</button>
        {this.state.hidden && <PetList id={id} /> }
      </article>
    );
  }
    
};

export default Employee;