import PetList from "./PetList";
import "./Employee.css";
import React from "react";

/* 
const Employee = (props) => {
  let comma = ""
  if(props.person.postfix) {
    comma = ","
  }

  return (
    <article className="employee">
        <h3>
          {props.person.prefix} {props.firstName} {props.person.lastName}
          {comma} {props.person.postfix}
        </h3>
        <h4>{props.person.title}</h4>
        <button onClick={props.onClick}>Show Pets</button>
        {props.state.clicked ? <PetList id={props.person.id} /> : null}
      </article>
  )
}
*/
class Employee extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };
  }

  render() {
    let comma = ""
    if(this.props.person.postfix) {
      comma = ","
    }

    return (
      <article className="employee">
        <h3>
          {this.props.person.prefix} {this.props.firstName} {this.props.person.lastName}
          {comma} {this.props.person.postfix}
        </h3>
        <h4>{this.props.person.title}</h4>
        <button onClick={() => this.setState({ clicked: !this.state.clicked })}>Show Pets</button>
        {this.state.clicked ? <PetList id={this.props.person.id} /> : null}
      </article>
    );
  }

  }

export default Employee;


