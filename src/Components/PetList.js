import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      displayPets: false
    }
  }

  handlePetDisplay = () => {
    this.setState({
      displayPets:true
    })
  }

  render() {
    let namesOfPets = this.props.pets.filter((pet)=> this.props.id === pet.employeeId).map((pet)=> {
      return (
        <p>
          {pet.name}
        </p>
      )
    })

    return (
      <>
        <button onClick={this.handlePetDisplay}>Show Pets</button>
        <aside className="pets-list" style={{display:this.state.displayPets? "block" : "none" }}>
          {namesOfPets.length? namesOfPets : "No pets listed for this employee."}
        </aside>
      </>
    );
    }
}

export default PetList;
