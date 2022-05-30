import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      petsArr: [],
      click: false,
    };
  }

  getPets = () => {
    fetch("https://serene-tundra-77911.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((pets) => {
        this.setState({
          petsArr: pets,
        });
      });
  };

  componentDidMount() {
    this.getPets();
  }

  nameFormat = (name) => {
    const { firstName, lastName, prefix, postfix } = name;
    if (name.postfix) {
      return `${firstName} ${lastName}, ${postfix}`;
    } else {
      return `${prefix} ${firstName} ${lastName}`;
    }
  };

  click = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    const { employee } = this.props;
    const { click } = this.state;
    return (
      <article className="employee">
        <h3>{this.nameFormat(employee)}</h3>
        <h4>{employee.title}</h4>
        <button onClick={this.click}>Show Pets</button>
        {click ? (
          <PetList petsArr={this.state.petsArr} employee={employee} />
        ) : null}
      </article>
    );
  }
}

export default Employee;
