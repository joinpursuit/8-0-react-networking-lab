import PetList from "./PetList";
import React, { Component } from "react";
import "./Employee.css";
import { render } from "@testing-library/react";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPets: false,
    }
  };

  render(){
    const { employee } = this.props;
    const { id, firstName: FName, lastName : LName, prefix, postfix, title } = employee;
    return (
      <article id={id} className="employee">
        <h3> {prefix && postfix ? `${prefix} ${FName} ${LName}, ${postfix}` 
            : !prefix && postfix ? `${FName} ${LName}, ${postfix}` 
            : `${prefix} ${FName} ${LName}` }
        </h3>
        <h4> {!title ? "Staff Member Title" : `${title}`}</h4>
        <button 
        onClick={() => this.setState({showPets:!this.state.showPets})}>Show Pets</button>
        <PetList id={id} showPets={this.state.showPets}/>
      </article>
    )
  }

}

export default Employee;