import { Component } from "react/cjs/react.production.min";
import React from "react";

export default class PetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: this.props.petList,
    };
  }

  render() {
    return (
      <aside className="petList">
        {this.state.petList.map((pet) => {
          return (
            <ul>
              <li>{pet}</li>
            </ul>
          );
        })}
      </aside>
    );
  }
}
