import { Component } from "react";


class PetList extends Component {
  constructor() {
    super()
    this.state = {
      petData: [],
    }
  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ petData: data })
      })
      .catch((error) => {
        console.log("no data found")
      })
  }



  render() {

    const petListarr = []

    this.state.petData.map((pet) => {
      return this.props.id === pet.employeedId && petListarr.push(pet.name)
    })

    return (
      <aside className="pets-list">
        <p>No pets listed for this employee.</p>
      </aside>
    );

  }
}


export default PetList;
