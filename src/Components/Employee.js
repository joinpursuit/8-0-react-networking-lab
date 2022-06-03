import PetList from "./PetList";
import React from "react";
import "./Employee.css";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: null,
    };
  }

  handleClick = (id) => {
    fetch(
      `https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${id}`
    ).then((response) => response.json())
    .then((data) => {
      this.state.pets === null
        ? this.setState({ pets: data })
        : this.setState({ pets: null });
    }).catch((error) => {
      console.log(error);
    });
  };

  render() {
    const { id, firstName, lastName, prefix, postfix, title } =
      this.props.worker;
    return (
      <article className="employee">
        <h3>
          {prefix} {firstName} {lastName} {postfix}
        </h3>
        <h4>{title}</h4>
        <button
         onClick={this.handleClick(id)}>Show Pets</button>
        <PetList />
      </article>
    );
  }
}

export default Employee;