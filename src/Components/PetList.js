import React from "react";

class PetList extends React.Component{

  constructor() {
    super();
    this.state = {
      pets: [],
      displayPets: false,
    };
  }

  componentDidMount() {
    fetch('https://vet-api-8-1.herokuapp.com/api/pets?employeeId=' + this.props.employeeID).then((response) => {
      return response.json()
  }).then((json) => {
      this.setState({
      pets: json,
      });
      })
  }  

  render (){
    let {pets} = this.state;
    let {displayPets} = this.props;
    let pet = pets.length ? pets.map((pet) => pet.name).join(",")
    : 'No pets listed for this employee.';
    return (
    <aside className="pets-list">
    <p>{displayPets ? pet : null}</p>
    </aside>
  );
}
}
export default PetList;
