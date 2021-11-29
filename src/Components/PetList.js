import React from "react";

class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://vet-api-8-1.herokuapp.com/api/pets?employeeId=` + this.props.id
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pets: data });
      })
      .catch((error) => {
        console.log("Error fetching pets");
      });
  }
  render() {
    const { pets } = this.state;
    const { showPets } = this.props;
    const animals = pets.length
      ? pets.map((pet) => pet.name).join(", ")
      : "No pets listed for this employee.";
    return (
      <aside className="pets-list">
        <p>{showPets ? animals : null}</p>
      </aside>
    );
  }
}

export default PetList;
