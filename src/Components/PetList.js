import React, { Component } from "react";

export default class PetList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { petList } = this.props;
    return (
      <div>
        {console.log(petList)}
        {petList.map((pets) => {
          return <p>{pets.name}</p>
        })}
        
      </div>
    );
  }
}
