import PetList from "./PetList";
import "./Employee.css";
import React, { Component } from "react";

export default class Employee extends Component {
  constructor(props){
    super(props);
    this.state = {
      pets: []
    };
  }

  getPets = (value) => {
    fetch('https://vet-lab-8-4.herokuapp.com/api/pets')
    .then(data => data.json())
    .then(res => {
      this.setState({
        pets: res.filter(pet => pet.employeeId === value ? pet : null)
      })
    })
  }

  handlePets = (e) => {
    const {value} = e.target;
    this.getPets(value)
  }

  render (){
    return (
      <div>
        <article className="employee">
          <h3>{this.props.employee.prefix} {this.props.employee.firstName} {this.props.employee.postfix ? `${this.props.employee.lastName}, ${this.props.employee.postfix}` : this.props.employee.lastName}</h3>
          <h4>{this.props.employee.title}</h4>
          <button value={this.props.employee.id} onClick={this.handlePets}>Show Pets</button>
          <PetList pets={this.state.pets}/>
        </article>
      </div>
    )
  }
};


