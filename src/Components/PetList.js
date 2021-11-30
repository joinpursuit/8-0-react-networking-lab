import { Component } from "react";

class PetList extends Component {
  constructor() {
    super()
    this.state = {
      listOfPets: [],
    }
  }

  componentDidMount() {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setTimeout(() => {
        console.log('Component Did Mount')
        this.setState({listOfPets: data})
      }, 1)
    })
  }

  render() {
    const doctorsPet = this.state.listOfPets.map((eachPet) => {
      return eachPet.name
    }).join(", ")

    return (
      <aside className="pets-list">
        {doctorsPet.length > 0 ? doctorsPet : <p>No pets listed for this employee.</p>}
      </aside>
    );
  }
};

export default PetList;
