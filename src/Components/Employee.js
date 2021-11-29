import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      class: "Hidden",
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      class: "",
    });
  };

  render() {
    const { id, firstName, lastName, prefix, postfix, title } =
      this.props.person;
    return (
      <article className="employee">
        <h3>
          {prefix && `${prefix} `}
          {firstName} {lastName}
          {postfix && `, ${postfix}`}
        </h3>
        <h4>{title}</h4>
        <button onClick={this.handleClick}>Show Pets</button>
        <div className={this.state.class}>
          <PetList id={id} />
        </div>
      </article>
    );
  }
}

export default Employee;
