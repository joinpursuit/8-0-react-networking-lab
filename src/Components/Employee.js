import React, { Component } from "react";
import PetList from "./PetList";
import "./Employee.css";

export default class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: []
    }
  }

  getPets = (value) => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/Pets")
      .then(data => data.json())//returns a promise & return Data
      .then(petInfo => {
        this.setState({
          pets: petInfo.filter(pet => value === pet.employeeId ? pet : null)
        })
      })
  }

  //handles our event aka our "Click"
  petHandle = (event) => {
    const { value } = event.target
    this.getPets(value)
  }


  //this is your employee card

  // componentDidMount(){//will effect the codeblock to run should if the info is correct
  //   this.getPets()
  // }

  render() {
  
    const { id, firstName, lastName, prefix, postfix, title } = this.props.worker
    return (
      <article className="employee">
        <h3> {prefix} {firstName} {lastName} {postfix}</h3>
        <h4>{title}</h4>
        <button value={id} onClick={this.petHandle}>Show Pets</button>
        <PetList pets = {this.state.pets}/>
      </article>
    );
  }
};

