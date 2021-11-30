import React from "react";

class PetList extends React.Component {
  render() {
    const pets = this.props.pets.map((pet) => {
      return pet.name;
    }).join(", ")
    return (
      <aside className="pets-list">
        {this.props.pets.length ? <p>{pets}</p> : <p>No pets listed for this employee.</p>}
      </aside>
    );
  };
};

export default PetList;
