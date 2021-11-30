import { Component, Fragment } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petData: [],
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
        this.setState({ petData: data });
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    console.log(petData)
    const { petData } = this.state;
    const petList = petData.map((pet) => {
      return <Fragment key={pet.id}>{pet.name}, </Fragment>;
    });
    return (
      <aside className="pets-list">
        {petList.length > 0 ? (
          <p>{petList}</p>
        ) : (
          <p>No pets listed for this employee.</p>
        )}
      </aside>
    );
  }
}

export default PetList;
