import { Component } from "react";

class PetList extends Component { 
  render(){
    return(
      <aside className="pets-list">
        <p>{this.props.petName},</p>
      </aside>
    )
  }
}

export default PetList;
