import React, { Component } from "react";
import PetList from "./PetList";
import "./Employee.css";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: [],
      
    };
  }
  getPets = () => {
    fetch(
      `http://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${this.props.employeeId}`
    )
      .then((data) => data.json())
      .then((pets) => {
        this.setState({
          petList: pets,
        });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getPets();
  }


  render() {
    const { employeeId, prefix, firstName, lastName, postfix, title } =
      this.props;

    return (
      <article className="employee">
        <h3>
          {prefix} {firstName} {lastName} {postfix}
        </h3>
        <h4>{title}</h4>
        <button onClick={this.petList ? <PetList petList={this.state.petList} />: null}>Show Pets</button>
        {/* <PetList petList={this.state.petList} /> */}
      </article>
    );
  }
}
