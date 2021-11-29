import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petData: [],
    };
  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((petsArr) => {
        this.setState({ petData: petsArr });
        console.log(petsArr);
      })
      .catch((error) => {
        console.log("error fetching data");
      });
  }

  render() {
    const arr = [];
    this.state.petData.map((pet) => {
      return this.props.id === pet.employeeId && arr.push(pet.name);
    });

    return (
      <aside className="pets-list">
        <p>
          {arr.length !== 0
            ? arr.join(", ")
            : "No pets listed for this employee"}
        </p>
      </aside>
    );
  }
}

export default PetList;
