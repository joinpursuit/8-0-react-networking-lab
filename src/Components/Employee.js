import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
    }
  }

  render() {
    const {id, firstName, lastName, prefix, postfix, title} = this.props.eachPerson

    return (
      <article className="employee">
        <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
        <h4>{title}</h4>
        <button 
          onClick={() => {
            this.setState({
              clicked: !this.state.clicked,
            })
          }}
        >
          Show Pets
        </button>
        {this.state.clicked ? <PetList id={id} /> : null}
      </article>
    );
  }
};

export default Employee;
