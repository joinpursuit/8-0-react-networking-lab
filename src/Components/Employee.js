import React from 'react';
import PetList from './PetList';
import './Employee.css';

class Employee extends React.Component {
  constructor() {
    super();
    this.state = { isActive: false };
  }

  render() {
    const { firstName, lastName, prefix, postfix, title, id } =
      this.props.employee;

    return (
      <article className="employee">
        <div>
          <h3>
            {prefix} {firstName} {lastName}, {postfix}
          </h3>
          <h4>{title}</h4>
        </div>
        <button
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          Show Pets
        </button>
        {this.state.isActive ? <PetList id={id} /> : null}
      </article>
    );
  }
}

export default Employee;
