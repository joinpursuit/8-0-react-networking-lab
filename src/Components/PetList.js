import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petsList: [],
      vetPetList: [],
      noPets: false,
    };
  }

  componentDidMount() {
    const Pet_URL = `https://serene-tundra-77911.herokuapp.com/api/pets`;
    fetch(Pet_URL)
      .then((res) => res.json())
      .then((pets) => {
        this.setState({
          petsList: pets,
        });
      })
      .catch(this.props.errors);
  }

  handleClick = () => {
    const { employee } = this.props;
    const { petsList } = this.state;

    this.setState({
      vetPetList: [],
      noPets: false,
    });

    let petArr = [];

    petsList.map((pets) => {
      if (pets.employeeId === employee.id) {
        petArr.push(pets);
      }

      return petArr;
    });

    if (petArr.length < 1) {
      this.setState({
        noPets: true,
      });
    }

    this.setState({
      vetPetList: petArr,
    });
  };

  renderPetList = () => {
    const { vetPetList } = this.state;

    const VetsPets = vetPetList.map((pets) => {
      return <p key={pets.id}>{pets.name}</p>;
    });

    return VetsPets;
  };

  render() {
    const { noPets } = this.state;

    return (
      <>
        <button onClick={this.handleClick}>Show Pets</button>
        <aside className="pets-list">
          {this.renderPetList()}
          {noPets ? <p>No pets listed for this employee.</p> : null}
        </aside>
      </>
    );
  }
}

export default PetList;
