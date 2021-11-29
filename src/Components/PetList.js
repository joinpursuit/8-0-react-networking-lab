import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petData: []
    }
  }

  componentDidMount() {
    fetch('https://vet-api-8-1.herokuapp.com/api/pets')
      .then((response) => response.json())
      .then((petsArr) => {
        this.setState({ petData: petsArr })
      })
      .catch((error) => {
        console.log('error fetching data')
      })
  }

  render() {
    const petsArr = []
    this.state.petData.map((pet) => {
      (this.props.id === pet.employeeId && petsArr.push(pet.name))
      return petsArr
    })

    return (
      <aside className="pets-list">
        <p>{petsArr.length !== 0 ? petsArr.join(', ') : 'No pets listed for this employee.'}</p>
      </aside>
    );
  }
};

export default PetList;
