import React, { Component } from "react";

export default class PetList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { petList } = this.props;
    return (
      <aside className="pets-list">
        {petList.map((pets) => {
          <p>{pets.name}</p>
        })}
        
      </aside>
    );
  }
}
