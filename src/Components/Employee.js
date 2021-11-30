import React from 'react'
import PetList from "./PetList";
import "./Employee.css";

export default class Employee extends React.Component {
  constructor(){
    super()
    this.state = {
      viewPets: false
    }
  }

  showOrHide = () => {
    this.setState({viewPets: !this.state.viewPets})
  }

  render(){
    const {prefix, firstName, lastName, title, postfix, id} = this.props.employee
    return (
        <article className="employee">
          <h3>{prefix&&prefix} {firstName} {lastName}{postfix&&', '+postfix}</h3>
          <h4>{title}</h4>
          <button onClick={this.showOrHide}>
            {!this.state.viewPets ? 'Show Pets': 'Hide Pets'}
          </button>
          {this.state.viewPets && <PetList eid={id} />}
        </article>
      )
  }
  
};

