import React from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      showPetsList: false,
    }
  }

  showAndHidePetList = (id) => {
    this.setState({ showPetsList: !this.state.showPetsList });
  };

  render() {
    const { id, firstName, lastName, title, prefix, postfix } = this.props.employee;
    let btnLabel = this.state.showPetsList ? "Hide Pets" : "Show Pets";

    return (
      <article className="employee" key={id}>
        <h3>{(prefix) ? prefix : ''} {firstName} {(postfix) ? `${lastName}, ${ postfix}` : `${lastName}`}</h3>
        <h4>{title}</h4>
        <button onClick={this.showAndHidePetList}>{btnLabel}</button>
        {this.state.showPetsList && <PetList employeeId={id}/>}
      </article>
    );
  }
};

export default Employee;
