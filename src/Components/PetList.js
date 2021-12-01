import React from "react";

class PetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      petApi: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          petApi: data,
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  render() {
    const displayPets = this.state.petApi.map((pet, i) => {
      return pet.name;
    }).join(", ");
    // console.log(displayPets)
    
    return (
      <aside className="pets-list">
        {displayPets.length > 0 ? <p>
          {displayPets}
        </p> : <p>No pets listed</p>}
      </aside>
    );
  }
}

export default PetList;
