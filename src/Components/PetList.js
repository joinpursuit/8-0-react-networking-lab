import React from 'react';

class PetList extends React.Component {
  constructor() {
    super();
    this.state = { pets: [] };
  }
  componentDidMount() {
    fetch(
      `https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${this.props.id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((Data) => {
        this.setState({
          pets: Data,
        });
      });
  }

  render() {
    let allPets = this.state.pets.map((pet) => {
      return (
        <>
          {pet.name}, <br></br>
        </>
      );
    });
    return (
      <aside className="pets-list">
        {allPets.length > 0 ? (
          <p>{allPets}</p>
        ) : (
          <p>No pets listed for this employee.</p>
        )}
      </aside>
    );
  }
}
export default PetList;
