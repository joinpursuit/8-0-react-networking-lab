import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pets: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const arr = [];
    this.state.pets.map((pet) => {
      this.props.id === pet.employeeId && arr.push(pet.name);
      return arr;
    });

    return (
      <aside className="pets-list">
        <p>
          {arr.length !== 0
            ? arr.join(", ")
            : "No pets listed for this employee."}
        </p>
      </aside>
    );
  }
}

export default PetList;
