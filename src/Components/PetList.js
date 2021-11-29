import { Component } from 'react';

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      showPets: false,
    };
  }

  componentDidMount() {
    const BASE_URL = 'https://vet-api-8-1.herokuapp.com/api/pets?employeeId=';
    const { empId } = this.props;
    fetch(BASE_URL + empId)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          pets: json,
        });
      })
      .catch((err) => {
        console.log('Error fetching pets');
      });
  }

  render() {
    const { pets } = this.state;
    const { showPets } = this.props;
    const animals = pets.length
      ? pets.map((pet) => pet.name).join(', ')
      : 'No pets listed for this employee.';
    return (
      <aside className="pets-list">
        <p>{showPets ? animals : null}</p>
      </aside>
    );
  }
}

export default PetList;
