import PetList from "./PetList";
import React from 'react'
import "./Employee.css";

class Employee extends React.Component {
  constructor () {
    super()
    this.state = {
      pets : []
    }
  }


handlePetButton = () => {
  let employeeId = this.props.employee.id
  let basePetURL = `https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${employeeId}`

  fetch(basePetURL)
  .then((response) => response.json())
  .then((petData) => this.setState(() => {
    return {pets : petData}
  }))

  .catch((error) => {
    console.log('Error getting Pets', error)
  })


  
}

  render() {
  return (
    <article className="employee">
      <h3>{this.props.employee.prefix} {this.props.employee.firstName} {this.props.employee.lastName}{this.props.employee.postfix ? `, ${this.props.employee.postfix}` : ''}</h3>
      <h4>{this.props.employee.title}</h4>
      <button onClick={this.handlePetButton}>Show Pets</button>
      <PetList pets={this.state.pets}/>
    </article>
  );
  }
};

export default Employee;
