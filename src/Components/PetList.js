import React from "react";

class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ 
          pets: data 
        });
      })
      .catch((error) => {
        console.log("Error fetching pets");
      });
  }


  render() {
    const empPet = this.state.pets.map((each) => {
      return <p>{each.name}</p>
    })
    

    return (
      <aside className="pets-list">
        {empPet.length > 0 ? <p>{empPet}</p> : <p>No pets listed for this employee.</p>}
      </aside>
    );
  }
}

export default PetList;