import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petData: [],
    };
  }

  getPets() {
    fetch(
      `https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.employeeId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("PETS",json)
        this.setState({
          petData: json
        });
      });
  }

  componentDidMount() {
    this.getPets();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employeeId !== this.props.employeeId) {
      this.getPets(this.props.employeeId);
    }
  }

  render() {
    const pets = this.state.petData.map(({ name, id }) => name).join(", ");
    return (
      <>
        {pets.length > 0 ? (
          <div>{pets} </div>
        ) : (
          <p>No pets listed for this employee.</p>
        )}
      </>
    );
  }
}

export default PetList;
