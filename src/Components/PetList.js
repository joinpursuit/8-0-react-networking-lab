import { Component } from "react/cjs/react.production.min";
import React from "react";

export default class PetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: this.props.pets,
    };
  }

  render() {
    return (
      <aside className="petList">
        <ul>
          {this.state.petList.map((pet) => {
            return <li>{pet.name}</li>;
          })}
        </ul>
      </aside>
    );
  }
}
