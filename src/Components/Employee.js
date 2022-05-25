import PetList from "./PetList";
import React from "react";
import "./Employee.css";
import { render } from "@testing-library/react";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }

  onClickHandler = (id) => {
    const url = `https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pets: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { pets } = this.state;
    let { id, firstName, lastName, prefix, postfix, title } =
      this.props.employeeData;

    if (postfix) {
      postfix = ", " + postfix;
    }

    return (
      <article className="employee">
        <h3>{`${prefix} ${firstName} ${lastName}${postfix}`}</h3>
        <h4>{title}</h4>
        <button onClick={() => this.onClickHandler(id)}>Show Pets</button>
        {pets && <PetList pets={pets} />}
      </article>
    );
  }
}
export default Employee;
