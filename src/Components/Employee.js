import React from "react";
import PetList from "./PetList";
import "./Employee.css";

const nameFormatter = (prefix, firstName, lastName, postfix) => {
  if (prefix === "" && postfix === "") {
    return <h3>{`${firstName} ${lastName}`}</h3>;
  } else if (prefix === "") {
    return <h3>{`${firstName} ${lastName}, ${postfix}`}</h3>;
  } else if (postfix === "") {
    return <h3>{`${prefix} ${firstName} ${lastName}`}</h3>;
  }
  return <h3>{`${prefix} ${firstName} ${lastName}, ${postfix}`}</h3>;
};

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      showPets: false,
    };
  }

  componentDidMount() {
    fetch("https://serene-tundra-77911.herokuapp.com/api/pets")
      .then((response) => response.json())
      .then((json) => this.setState({ pets: json }));
  }

  togglePets = () => {
    const { showPets } = this.state;
    this.setState({
      showPets: !showPets,
    });
  };

  render() {
    const { employee } = this.props;
    const { prefix, firstName, lastName, title, postfix, id } = employee;
    return (
      <article className="employee">
        {nameFormatter(prefix, firstName, lastName, postfix)}
        <h4>{title}</h4>
        <button onClick={() => this.togglePets()}>Show Pets</button>
        {this.showPets ? (
          <PetList pets={this.state.pets} employeeId={id} />
        ) : (
          ""
        )}
      </article>
    );
  }
}

export default Employee;
