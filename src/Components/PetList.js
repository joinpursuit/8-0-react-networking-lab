import React from 'react'


class PetList extends React.Component {
  render() {
    console.log(this.props.pets)
  return (
    <aside className="pets-list">
      {!this.props.pets.length && <p>No pets listed for this employee.</p>}
      {this.props.pets.length > 0 && <p>{this.props.pets.map((pet) => { return pet.name}).join(', ')}</p>}
    </aside>
  );
  }
};

export default PetList;
