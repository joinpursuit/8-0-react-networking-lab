import { Component } from "react";

class PetList extends Component {

  render() {
    let namesOfPets = this.props.pets.filter((pet)=> this.props.id === pet.employeeId).map((pet)=> {
      return (
        <p>
          {pet.name}
        </p>
      )
    })

    return (
      <aside className="pets-list">
        {namesOfPets}
        <p>No pets listed for this employee.</p>
      </aside>
    );
    }
}

export default PetList;
