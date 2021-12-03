import PetList from "./PetList";
import "./Employee.css";
import React from "react";


class Employee extends React.Component {

  constructor() {
    super();
    this.state = {
      display: "hidden"
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      display: ""
    });
  }

  render() {

    const { id, firstName, lastName, prefix, postfix, title } =
      this.props.person;

    return (
      <article className="employee">
        <h3>
          ${prefix}
          {firstName} {lastName}
          {postfix}
        </h3>
        <h4>{title}</h4>
        <button onClick={this.handleClick}>Show Pets</button>
        <PetList id={id} />
      </article>
    )
  }


}

export default Employee;
