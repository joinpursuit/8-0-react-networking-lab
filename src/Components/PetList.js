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
        <div>
          <br></br>
          {this.state.petList.length ? (
            this.state.petList.map((pet) => {
              return (
                <>
                  {pet.name}
                  {this.state.petList.indexOf(pet) === this.state.petList.length-1 ? null : ", " }
                  
                </>
              );
            })
          ) : (
            <h4>No pets listed</h4>
          )}
        </div>
      </aside>
    );
  }
}
