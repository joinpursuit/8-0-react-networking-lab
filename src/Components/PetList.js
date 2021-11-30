import { Component } from "react";

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
    const { petData } = this.state;
    const petList = petData.map((pet) => {
      return <>{pet.name},</>;
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
