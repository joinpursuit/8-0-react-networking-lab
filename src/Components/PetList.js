import { Component } from "react";

class PetList extends Component {
  joinPetNames = () => {
    if (!this.props.petList.length) {
      return "No pets listed for this employee.";
    } else {
      return this.props.petList
        .map((pet) => {
          return pet.name;
        })
        .join(", ");
    }
  };

  render() {
    return <aside className="pets-list">{this.joinPetNames()}</aside>;
  }
}

export default PetList;
