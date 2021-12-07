import { Component } from "react";


class PetList extends Component {
  constructor() {
    super();
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pets: data });
      })
      .catch((error) => {
        console.log(error);
      });
  } 

  render() {
    const petsArr = [];
      this.state.pets.map((pet) => {
        this.props.id === pet.employeeId 
        && petsArr.push(pet.name);
      
        return petsArr;
  });

  return (
    <aside className="pets-list">
      <p>
        {petsArr.length !== 0 ? petsArr.join(", ") : 
         "No pets listed for this employee."}
      </p>
    </aside>
    );
  }
}

export default PetList;

//you can look for pets with ID that matches an employee