import PetList from './PetList';
import './Employee.css';
import React from 'react';

class Employee extends React.Component {
  constructor() {
    super();
    this.state = { ownersOfHumans: null };
  }

  fetchDogs = (person) => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
      .then((res) => res.json())
      .then((doggies) => {
        const partnerInCrime = doggies.filter(
          (matchedId) => matchedId.employeeId === person.id,
        );
        this.setState({
          ownersOfHumans: partnerInCrime,
        });
      });
  };

  handleClick = (person) => {
    this.state.ownersOfHumans
      ? this.setState({
          ownersOfHumans: null,
        })
      : this.fetchDogs(person);
  };

  OwnerOfDoggo = (person) => {
    const { firstName, lastName, postfix, prefix } = person
    if (person.prefix) {
     return `${prefix} ${firstName} ${lastName}`;
    } else if (postfix) {
      return `${firstName} ${lastName}, ${postfix}`;
    } else {
      return `${firstName} ${lastName}`;
    }
  };
  render() {
    const { employee } = this.props;
    return (
      <article className='employee'>
        <h3>{this.OwnerOfDoggo(employee)}</h3>
        <h4>{employee.title}</h4>
        <button onClick={() => this.handleClick(employee)}>Show Pets</button>
        {this.state.ownersOfHumans && (
          <PetList ownersOfHumans={this.state.ownersOfHumans} />
        )}
      </article>
    );
  }
}
export default Employee;
