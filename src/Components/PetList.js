import { Component } from "react";

export class PetList extends Component {
  render(){
    return (
      <aside className="pets-list">
        <p>No pets listed for this employee.</p>
      </aside>
    );
  }
};

export default PetList;
