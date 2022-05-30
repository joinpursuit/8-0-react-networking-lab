import React from "react";
import PetList from "./PetList";
import "./Employee.css";

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

  togglePetsDisplay = () => {
    const { showPets } = this.state;
    this.setState({
      showPets: !showPets,
    });
  };

  nameFormatter = (prefix, firstName, lastName, postfix) => {
    if (prefix === "" && postfix === "") {
      return <h3>{`${firstName} ${lastName}`}</h3>;
    } else if (prefix === "") {
      return <h3>{`${firstName} ${lastName}, ${postfix}`}</h3>;
    } else if (postfix === "") {
      return <h3>{`${prefix} ${firstName} ${lastName}`}</h3>;
    }
    return <h3>{`${prefix} ${firstName} ${lastName}, ${postfix}`}</h3>;
  };

  render() {
    const { employee } = this.props;
    const { prefix, firstName, lastName, title, postfix, id } = employee;
    return (
      <article className="employee">
        {this.nameFormatter(prefix, firstName, lastName, postfix)}
        <h4>{title}</h4>
        <button onClick={this.togglePetsDisplay}>Show Pets</button>
        <div className={this.state.showPets ? "visible" : "hidden"}>
          <PetList pets={this.state.pets} employeeId={id} />
        </div>
      </article>
    );
  }
}

export default Employee;
