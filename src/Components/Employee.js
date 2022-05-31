import PetList from "./PetList";
import "./Employee.css";
import { render } from "@testing-library/react";
import React from 'react';


class Employee extends React.Component{
  constructor() {
    super();
    this.state = {
      showPets: false,
    };
  };

  getPets = () => {
    this.setState((previousState) => ({
      showPets: !previousState.showPets,
    }));
  }

  render(){
    const {showPets} = this.state
    const {pets, employee} = this.props
    const {prefix, firstName, lastName, postfix, title, id} = employee

    return (
      <article className="employee">
        <h3>{prefix} {firstName} {lastName}{postfix && `, ${postfix}`}</h3>
        <h4>{title}</h4>
        <button onClick={this.getPets} >Show Pets</button>
        <PetList showPets={showPets} pets={pets} employeeId={id}/>
      </article>
    );
  };
}

export default Employee;
