import { Component } from "react";

class PetList extends Component {

  render() {
    let namesOfPets = this.props.pets.filter((pet)=> this.props.id === pet.employeeId).map((pet)=> {
      return `${pet.name}, `
    })

    return (
      <>
        <aside className="pets-list" style={{display:this.props.displayPets? "block" : "none" }}>
          {namesOfPets.length? namesOfPets : "No pets listed for this employee."}
        </aside>
      </>
    );
    }
}

export default PetList;
