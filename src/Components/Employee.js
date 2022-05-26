import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react/cjs/react.production.min";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      title: this.props.title,
      prefix: this.props.prefix,
      postfix: this.props.postfix,
      id: this.props.id,
    };
    console.log(props);
  }

  render() {
    return (
      <article className="employee">
        <h3>
          {this.state.prefix} {this.state.firstName} {this.state.lastName}{" "}
          {this.state.postfix}
        </h3>
        <h4>{this.state.title}</h4>
        {/* <h3>Person's name and title go here</h3>
        <h4>Actually just their title will go here</h4> */}
        <button>Show Pets</button>
        <PetList />
      </article>
    );
  }
}
