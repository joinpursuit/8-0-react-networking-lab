import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      pets: [],
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    if(this.state.isHidden !== prevState.isHidden) {
      try {
        const response = await fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.info.id}`)
        const petsData = await response.json();
          this.setState({
            pets: petsData
          })
      } catch(err) {
        console.log("No Pets listed")
      }
    }
  }
  
  render() {
    const {firstName, lastName, prefix, postfix, title} = this.props.info;
    let fullName = `${prefix} ${firstName} ${lastName}`;
      if(postfix) {
        fullName = `${fullName}, ${postfix}`;
      }

    return (
      <article className="employee">
        <h3>{fullName}</h3>
        <h4>{title}</h4>
        <button onClick={this.handleClick}>Show Pets</button>
        {this.state.isHidden ? "" : <PetList isHidden={this.state.isHidden} pets={this.state.pets}/>}
      </article>
    );
  };
};

export default Employee;
