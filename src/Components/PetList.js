import React, { Component } from "react";

export default class PetList extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
      return(
        <aside className="pets-list">
          <p>{this.props.pets.length === 0 ? "No pets listed for this employee": this.props.pets.map(pet => pet.name + ", ")}</p>
        </aside>
      );
  }
};


