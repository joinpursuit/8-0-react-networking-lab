import PetList from "./PetList";
import React from "react";
import "./Employee.css";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = { vetPets: [] };
  }

  fetchDogs = (person) => {
    fetch("https://serene-tundra-77911.herokuapp.com/api/pets")
      .then((res) => res.json())
      .then((animals) => {
        const matchedAnimals = animals.filter(
          (a) => a.employeeId === person.id
        );
        this.setState({
          vetPets: matchedAnimals,
        });
      });
  };

  handleClick = (person) => {
    this.fetchDogs(person);
  };

  nameFormatter = (person) => {
    const { firstName, lastName, postfix, prefix } = person;
    if (person.prefix) {
      return `${prefix} ${firstName} ${lastName}`;
    } else if (postfix) {
      return `${firstName} ${lastName}, ${postfix}`;
    } else {
      return `${firstName} ${lastName}`;
    }
  };
  render() {
    const { employee } = this.props;
    console.log(this.state.vetPets);

    return (
      <article className="employee">
        <h3>{this.nameFormatter(employee)}</h3>
        <h4>{employee.title}</h4>
        <button onClick={() => this.handleClick(employee)}>Show Pets</button>
        <PetList vetPets={this.state.vetPets} />
      </article>
    );
  }
}

export default Employee;
