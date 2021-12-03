import React from "react";


class PetList extends React.Component {


  render(){
    let {showPets, havePets} = this.props;
    
    return (
      <aside className="pets-list">
        <p>{havePets && showPets ? showPets.join(", ") : "No pets listed"}</p>
      </aside>
    );
  }
};

export default PetList;
