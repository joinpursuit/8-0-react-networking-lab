import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = { vetPets: null };
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
    this.state.vetPets
      ? this.setState({
          vetPets: null,
        })
      : this.fetchDogs(person);
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
    return (
      <article className="employee">
        <h3>{this.nameFormatter(employee)}</h3>
        <h4>{employee.title}</h4>
        <button onClick={() => this.handleClick(employee)}>Show Pets</button>
        {this.state.vetPets && <PetList vetPets={this.state.vetPets} />}
      </article>
    );
  }
}

export default Employee;
