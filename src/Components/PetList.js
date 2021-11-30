import { Component } from "react";

class PetList extends Component { 
  render(){

    if (this.props.allPets.length === 0){
      return(
        <aside className="pets-list">
          <p>No pets listed for this employee.{this.props.allPets}</p>
        </aside>
      )
    } else {
      return(
        <aside className="pets-list">
          <p>{this.props.allPets}</p>
        </aside>
      )
    }

  }
}

export default PetList;
