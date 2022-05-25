import PetList from "./PetList";
import React from "react";
import "./Employee.css";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = { animals: [] };
  }

  fetchDogs = () => {
    fetch("https://serene-tundra-77911.herokuapp.com/api/pets")
      .then((res) => res.json())
      .then((dogs) => {
        this.setState({
          animals: dogs,
        });
      });
  };
  nameFormatter = (person) => {
    const { firstName, id, lastName, postfix, prefix, title } = person;
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
        <button>Show Pets</button>
        <PetList />
      </article>
    );
  }
}

export default Employee;
