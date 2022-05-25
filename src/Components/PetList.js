import React, { Component } from 'react';

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }
  //function to fetch apiData
  updatePetsURL = () => {
    const { eid } = this.props;
    console.log('updating the pets url');
    fetch(`http://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${eid}`)
      .then((response) => response.json())
      .then((data) => {
        // if (data.status === 'success') {
        this.setState({
          pets: [...data],
        });
        // }
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.updatePetsURL();
  }

  render() {
    return (
      <aside className='pets-list'>
        {this.state.pets.map(({ name }) => name).join(', ') || (
          <p>No pets listed for this employee.</p>
        )}
      </aside>
    );
  }
}

export default PetList;
