import React, { Component } from "react";
import PetList from "./PetList";
import "./Employee.css";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petList: [],
      showPets: false,
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

  handleClick = () => {
    if (this.state.showPets === false) {
        this.setState({
          showPets: true,
        })
    } else {
      this.setState({
        showPets: false,
      })
    }
  };

  show = () => {
    if(this.state.showPets === true){
      return (
        <PetList petList={this.state.petList}/>
      )
    }
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
        <button onClick={this.handleClick}>Show Pets</button>
        <section>{this.show()}</section>
      </article>
    );
  }
}
