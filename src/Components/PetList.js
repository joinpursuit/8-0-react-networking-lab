import { Component } from "react"

class PetList extends Component{

  joinPetNames = () => {
    if(!this.props.pets.length) return "No pets listed"
    else {
      return this.props.pets.map((pet)=> {
        return pet.name
      }).join(", ")
    } 
  }

  render(){
    console.log(this.props.pets);
    return (
      <aside className="pets-list">
        <p>{this.joinPetNames()}</p>
      </aside>
    )
  }
}

export default PetList