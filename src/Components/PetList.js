import React from "react";

class PetList extends React.Component {
constructor() {
  super();
  this.state = {
    allPets: [],
  };
}

getAllPets = () => {
  // >> Making a request to the API with all the pets
  fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
  .then((data) => data.json())
  .then((pets) => {
    this.setState({
      allPets: pets,
    })
  });
}

componentDidMount() {
  this.getAllPets();
}

getPetsByEmployee(pets, id) {
  // >> Filtering pets by employee Id
  const petByEmployeeId  = pets.filter(pet => pet.employeeId === id);
  if(petByEmployeeId.length !== 0){
    return <ul>{petByEmployeeId.map(pet => <li key={pet.id}>{pet.name}</li>)}</ul>
  } else {
    return <p>No pets listed for this employee.</p>;
  }
}

render() {
  return (
    <aside className="pets-list">
      {this.getPetsByEmployee(this.state.allPets, this.props.employeeId)}
    </aside>
  );
}
};

export default PetList;