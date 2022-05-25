import PetList from './PetList';
import './Employee.css';
import React, { Component } from 'react';

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      showPets: false,
    };
  }

  showOrHide = () => {
    this.setState({ showPets: !this.state.showPets });
  };

  render() {
    const { prefix, firstName, lastName, title, postfix, id } =
      this.props.employee;
    console.log('props', this.props.employee);
    return (
      <article className='employee'>
        <h3>
          {[prefix, firstName, lastName].join(' ')}
          {postfix && ', ' + postfix}
        </h3>
        <h4>{title}</h4>
        <button onClick={this.showOrHide}>
          {!this.state.showPets ? 'Show Pets' : 'Hide Pets'}
        </button>
        {this.state.showPets && <PetList eid={id} />}
      </article>
    );
  }
}

export default Employee;
