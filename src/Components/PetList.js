import React from "react";


class PetList extends React.Component {


  render(){
    let {showPets, havePets} = this.props;
    let associatedPets = havePets && showPets.length!==0 ? showPets.join(", ") : "No pets listed";
    return (
      <aside className="pets-list">
        <p>{associatedPets}</p>
      </aside>
    );
  }
};

export default PetList;
