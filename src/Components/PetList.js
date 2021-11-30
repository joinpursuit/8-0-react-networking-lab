import { Component } from "react";

class PetList extends Component {
  constructor() {
    super()
    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pets: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    const newArr = [];
    this.state.pets.map((pet) => {
      this.props.id === pet.employeeId && newArr.push(pet.name);
      return newArr;
    });
    
    return (
      <aside className="pets-list">
        <p>
          {newArr.length !== 0 ?
          newArr.join(",")
          : "No pets listed for this employee."}
          </p>
      </aside>
    );
  }
};

export default PetList;
