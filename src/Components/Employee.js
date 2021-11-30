import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      pets: "",
    }
  }

  handlePets = () => {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.employee.id}`)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json)
      this.setState({
        pets: json,
      })
    })
    .catch((err) => {
      console.log("error fetching data")
    })
  } 

  render() {
    const { prefix, firstName, lastName, postfix, title } = this.props.employee;
    // console.log(this.props)
    const hasPets = Array.isArray(this.state.pets) ? <PetList pets={this.state.pets} /> : null;

    return (
      <article className="employee">
        <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
        <h4>{title}</h4>
        <button onClick={this.handlePets} >Show Pets</button>
        {hasPets}
      </article>
    );
  }

};

export default Employee;
