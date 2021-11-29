import PetList from './PetList';
import './Employee.css';
import { Component } from 'react';

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      showPets: false,
    };
  }

  toggle = () => {
    this.setState({
      showPets: !this.state.showPets,
    });
  };
  render() {
    const { id, firstName, lastName, prefix, postfix, title } = this.props.info;
    const { showPets } = this.state;
    const name =
      [prefix, firstName, lastName].join(' ') + (postfix ? ', ' + postfix : '');
    return (
      <article className="employee">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <button onClick={this.toggle}>
          {showPets ? 'Hide Pets' : 'Show Pets'}
        </button>
        {showPets && <PetList empId={id} />}
      </article>
    );
  }
}

export default Employee;
