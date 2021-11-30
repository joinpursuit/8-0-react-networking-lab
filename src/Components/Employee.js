import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor(){
    super()
    this.state = {
      clicked: false,
    }
  }
  
render() {

  return (
    this.props.person === null ? <h3>Updating</h3> : this.props.person.map((each, i) => {
      const id = each.id;
      const firstName = each.firstName;
      const lastName = each.lastName;
      const prefix = each.prefix;
      const postfix = each.postfix;
      const title = each.title ;
      const fullName = 
      [prefix, firstName, lastName].join(" ") + (postfix ? ", " + postfix : "");

      return (
        <article className="employee" key = {i}>
          <h3>{fullName} </h3>
          <h4>{title}</h4>
          <button onClick={() => this.setState({ clicked: !this.state.clicked })}>Show Pets</button>
          <PetList id={id} clicked={this.state.clicked} />
        </article>
      )
    })
  );
 };
}
export default Employee;