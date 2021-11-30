import react from "react";

class PetList extends react.Component {
  constructor() {
    super();
    this.state = {
      listOfPets: [],
    };
  }

  componentDidMount() {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.id}`)
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        this.setState({ listOfPets: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const doctorsPet = this.state.listOfPets.map((eachPet) => {
      return <p>{eachPet.name}</p>;
    });
    console.log(doctorsPet);

    return (
      <aside className="pets-list">
        {doctorsPet.length > 0 ? <p>{doctorsPet}</p> : <p>No pets listed for this employee.</p>}
      </aside>
    );
  }
}

export default PetList;
